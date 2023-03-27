const express = require('express'); //dependency
const app = express();
const subCustomerController = require('./subCustomerController');


app.use(express.json());

app.post('/sub-customers', subCustomerController.createSubCustomer);
app.put('/sub-customers/:subCustomerId', subCustomerController.updateSubCustomer);

module.exports = app;