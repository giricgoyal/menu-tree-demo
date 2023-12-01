export const doRequest = (events) => {
    return new Promise((resolve, reject) => {
        return resolve({
            ok: true,
            status: 200,
            json: () => Promise.resolve({}),
        })
    })
}
