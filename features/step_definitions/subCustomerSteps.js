const { Given, When, Then } = require('@cucumber/cucumber');
const axios = require('axios');
const { expect } = require('chai');

let response;

When('I create a sub-customer with customerId {string}, subCustomerId {string}, and subCustomerName {string}', async (customerId, subCustomerId, subCustomerName) => {
  try {
    response = await axios.post('http://localhost:3000/dev/sub-customers', {
      customerId,
      subCustomerId,
      subCustomerName,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    response = error.response;
  }
});

When('I update the sub-customer with customerId {string}, subCustomerId {string}, and new subCustomerName {string}', async (customerId, subCustomerId, subCustomerName) => {
  try {
    response = await axios.put(`http://localhost:3000/dev/sub-customers/${subCustomerId}`, {
      customerId,
      subCustomerName,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    response = error.response;
  }
});

Then('the response status should be {int}', (expectedStatus) => {
  expect(response.status).to.equal(expectedStatus);
});

Then('the response should contain the created sub-customer data', () => {
  expect(response.data).to.have.property('data');
  expect(response.data.data).to.have.property('customerId', 'customer1');
  expect(response.data.data).to.have.property('subCustomerId', 'subcustomer1');
  expect(response.data.data).to.have.property('subCustomerName', 'Sub-customer 1');
});

Then('the response should contain the updated sub-customer data', () => {
  expect(response.data).to.have.property('data');
  expect(response.data.data).to.have.property('customerId', 'customer1');
  expect(response.data.data).to.have.property('subCustomerId', 'subcustomer1');
  expect(response.data.data).to.have.property('subCustomerName', 'Updated Sub-customer 1');
});
