export function createResolver(): any {
    const resolver: any = {}

    resolver.promise = new Promise((resolve, reject) => {
        resolver.resolve = function (resolution) {
            resolve(resolution)
        }.bind(resolver)

        resolver.reject = function (resolution) {
            reject(resolution)
        }.bind(resolver)
    })

    return resolver
}
