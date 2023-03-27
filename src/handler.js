const serverless = require('serverless-http');
const app = require('./app');

module.exports.handler = serverless(app);
//This code sets up the serverless-http package to handle Lambda function invocations and passes the Express app created in app.js.