const { createMessageController, helloController } = require("./Controller/messageController")

exports.handler = async (event, context, callback) => {
    console.log(JSON.stringify(event))
    const path = event.requestContext.http.path
    const method = event.requestContext.http.method

    if (method === "GET" && path === "/hello")
        return helloController(event, context, callback)
    else if (method === "PUT" && path === "/msg")
        return createMessageController(event, context, callback)
    else
        return { statusCode: 404, body: JSON.stringify({ message: "Caminho não encontrado" }) }
};
