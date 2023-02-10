const aws_sdk = require('aws-sdk');
AWS.config.update({
    region: 'us-east-2'
});

const docClient = new AWS.DynamoDB.DocumentClient();

async function getUserByUsername(username) {
    const params = {
        TableName: "Users",
        Key: {
            username
        }
    }

    return docClient.get(params).promise();
}

async function updateAddress(address, username) {
    const params = {
        TableName: "Users",
        UpdateExpression: "set #add = :add",
        ExpressionAttributeNames: {
            "#add": "address"
        },
        ExpressionAttributeValues: {
            ":add": address
        },
        Key: {
            username
        }
    }
    return docClient.update(params).promise();
}

async function updateName(name, username) {
    const params = {
        TableName: "Users",
        UpdateExpression: "set #name = :name",
        ExpressionAttributeNames: {
            "#name": "name"
        },
        ExpressionAttributeValues: {
            ":name": name
        },
        Key: {
            username
        }
    }

    return docClient.update(params).promise();
}

module.exports = {
    getUserByUsername,
    updateAddress,
    updateName,
}