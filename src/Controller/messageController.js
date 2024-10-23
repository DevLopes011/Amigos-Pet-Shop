// const createMessage = require('../Model/createMessageModel');

export async function helloController(event, context, callback) {
    const response = { statusCode: 200, body: JSON.stringify({ message: "Hello, World!" }) };
    return response
}

export async function createMessageController(event, context, callback) {
    // const { id, email, phone, message } = event.body;

    try {
        // const result = await createMessage({ id, email, phone, message });
        const result = { message: `Message created successfully` };
        const response = { statusCode: 201, body: JSON.stringify(result) };
        return response
    } catch (error) {
        console.error(error);
        const response = {
            statusCode: 500, data: { error: 'Could not create message' }
        }
        return response
    }
}
