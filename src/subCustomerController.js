const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
//{endpoint: 'http://localhost:3000',region: 'eu-central-1'}

module.exports = {

    createSubCustomer: async (req, res) =>{
        const {customerId, subCustomerId, subCustomerName} = req.body;

        const params = {
            TableName: process.env.DYNAMODB_TABLE, //Table name from environment params in serverless.yml
            Item: {
                customerId,
                subCustomerId,
                subCustomerName,
            },
        };
        //console.log(req);
       
        try {
          await dynamoDb.put(params).promise().then((data)=>{
              res.status(201).json({message: 'Sub-customer created successfully', data: params.Item});
            });

             
        } catch (error) {
           console.error(error);
            res.status(500).json({message: 'Unable to create sub-customer.'});
        }
    },

    updateSubCustomer: async (req,res) => {
        const {subCustomerId} = req.params;
        const {customerId, subCustomerName} = req.body;

        const params = {
            TableName: process.env.DYNAMODB_TABLE,
            Key: {
                customerId,
                subCustomerId,
            },
            UpdateExpression: 'set subCustomerName = :subCustomerName',
            ExpressionAttributeValues:{
                ':subCustomerName': subCustomerName,
            },
            ReturnValues: 'ALL_NEW',
        };

        try {
            const result = await dynamoDb.update(params).promise();
            res.status(200).json({message: 'Sub-customer updated successfully.', data: result.Attributes});
        } catch (error){
            console.error(error);
            res.status(500).json({message: 'Unable to update sub-customer.'});
        }
    },
};