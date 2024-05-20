const doRequest = (events) => {
    return new Promise((resolve, reject) => {
        return resolve({
            ok: true,
            status: 200,
            json: () => Promise.resolve(events),
        })
    })
}

async function pushEvents(events) {
    const result = await doRequest(events)
    if (result.status !== 200) {
        throw 'Error occured'
    }
    return result.json()
}

function sendAnalyticsEvent(batchSize = 5) {
    let queue = []

    setInterval(async () => {
        if (queue.length) {
            let events
            try {
                events = [...queue]
                queue = []
                const result = await pushEvents(events)
                console.log('---- timed ----')
                console.log(result)
            } catch (error) {
                console.log(error)
                queue.push(...events)
            }
        }
    }, 2000)

    return async function (event) {
        let events
        try {
            if (!event) {
                return
            }
            console.log('Event pushed', event)
            queue.push(event)

            if (queue.length >= batchSize) {
                events = queue.slice(0, batchSize)
                queue.splice(0, batchSize)
                const result = await pushEvents(events)
                console.log('---- batched ---')
                console.log(result)
            }
        } catch (error) {
            queue.unshift(...events)
            console.log(error)
        }
    }
}

const analyticsObj = sendAnalyticsEvent(3)
analyticsObj({ name: 'test1' })
analyticsObj({ name: 'test2' })
analyticsObj({ name: 'test3' })
analyticsObj({ name: 'test4' })
setTimeout(() => {
    analyticsObj({ name: 'test5' })
}, 1500)
