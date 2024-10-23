const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");

// Criar cliente do DynamoDB
const client = new DynamoDBClient({ region: 'us-east-1' });
const dynamo = DynamoDBDocumentClient.from(client);

// Função para criar uma mensagem no DynamoDB
const createMessage = async (Message) => {
  const params = {
    TableName: "perguntas-amigospetshop",
    Item: {
      id: Message.id, // Identificador da Mensagem
      name: Messsage.name,
      email: Message.email,   // Email do usuário
      phone: Message.phone,   // Telefone do usuário
      message: Message.message // Mensagem do usuário
    },
  };

  try {
    await dynamo.send(new PutCommand(params));
    return { message: `Message ${Message.id} created successfully` };
  } catch (error) {
    throw new Error(`Error creating Message: ${error.message}`);
  }
};

module.exports = createMessage;
