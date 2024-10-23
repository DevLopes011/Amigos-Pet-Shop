// Importa o handler da função Lambda que você quer testar
const { handler } = require('../Controller/messageController');  
const event = require('./event.json');  // Mock do evento

// Mock do contexto da Lambda
const context = {
  functionName: 'myLambdaFunction',
  awsRequestId: 'random-aws-request-id',
  logGroupName: '/aws/lambda/myLambdaFunction',
};

// Mock da função callback para capturar a resposta
function callback(error, response) {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Response:', response);
  }
}

(async () => {
  try {
    // Executa o handler da Lambda passando o evento mockado, o contexto e a função callback
    await handler(event, context, callback);
  } catch (error) {
    console.error('Test Error:', error);
  }
})();
