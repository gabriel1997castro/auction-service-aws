import AWS from 'aws-sdk';

const dynamodb = new AWS.DynamoDB.DocumentClient();

export async function getEndedAuctions() {
  const now = new Date();
  const params = {
    TableName: process.env.AUCTIONS_TABLE_NAME,
    IndexName: 'statusAndEndDate',
    KeyConditionExpression: '#status = :status AND endingAt <= :now', //query in dynamoDB
    ExpressionAttributeValues: {
      ':status': 'OPEN', // values to the query
      ':now': now.toISOString(),
    },
    ExpressionAttributeNames: {
      '#status': 'status', // used because status is a reserved word
    },
  };

  const result = await dynamodb.query(params).promise();
  return result.Items;
}