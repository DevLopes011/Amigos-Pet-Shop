const { buildResponse } = require('../../index');
const createMessage = require('../../Model/createMessageModel');

async function helloHandler(event, context, callback) {
    const response = buildResponse(200, { message: "Hello, World!" });
    callback(null, response);
}

async function createMessageHandler(event, context, callback) {
    const { id, email, phone, message } = event.body;

    try {
        const result = await createMessage({ id, email, phone, message });
        const response = buildResponse(201, result);
        callback(null, response);
    } catch (error) {
        console.error(error);
        callback(null, buildResponse(500, { error: 'Could not create message' }));
    }
}

module.exports = { helloHandler, createMessageHandler };