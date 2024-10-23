export class Router {
    constructor(event, context, callback) {
        this.event = event
        this.callback = callback
        this.context = context

        this.path = event.requestContext.http.path
        this.method = event.requestContext.http.method
    }

    async route(method, path, handler) {
        if (this.method === method && this.path === path) {
            try {
                if (method !== 'GET') {
                    this.event.body = JSON.parse(this.event.body)
                }
                await handler(this.event, this.context, this.callback)
            } catch (error) {
                console.log(error)
                this.callback(null, buildResponse(500, "Data Error"))
            }
        }
    }
    buildResponse(statusCode, body) {
        return {
            statusCode,
            body: JSON.stringify(body),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
        }
    }
}
