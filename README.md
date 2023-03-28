# Interactive Voice REST API

This serverless application exposes two endpoints to create and update sub-customers in a dynamoDB database, using AWS Lambda and AWS API Gateway. 

The endpoints are:
- **/sub-customers (POST):**  This endpoint uses 3 body parameters, "customerId", "subCustomerId" and "subCustomerName". It inserts a new sub-customer with a composite key formed by "CustomerId" and "subCustomerId" parameters, and the provided "subCustomerName" as an attribute. It will return a 201 on successful insertion, and a 500 error on failure.

- **/sub-customers/:subCustomerId (PUT)**: This customer uses 2 body parameters, "customerId" and "subCustomerName". It matches the element with the corresponding "customerID" and "subCustomerID" and updates its "subCustomerName" to the provided value. If the element does not exist, it will be created. It will return a 200 on succesful update, and a 500 error on failure.

## How to run and deploy

### Running in local

To run the provided code, some dependencies are needed.

- Node.js: Available for download at https://nodejs.org/es
- AWS CLI: Available with instructions at https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html.
You'll need to create an AWS user using IAM and add the key and secret key to the AWS CLI console, following the instructions on the Quick Setup section of the provided link.
- Once the code has been cloned, install the npm dependencies using 'npm install'

To run the API locally, open a console on the root directory of the project and run the command 'serverless offline'. This will use the serverless-plugin to deploy an offline version of a dynamoDB database, Lambda and API Gateway, and will launch the application. You'll have to point the dynamoDB endpoint to your local instance of the database.

### Testing

The application has Cucumber tests that can be run from a console with the command 'npm run test-cucumber'. This will run the Scenarios defined in subCustomer.feature file, following the step definitions found inside the step_definitions folder, in the subCustomerSteps.js file.

### Deploying to AWS
To deploy the API to Amazon Web Services, run the command 'serverless deploy'. It will package and create the necessary elements in AWS to deploy and run the application. It is important that the AWS user you assigned to the CLI has the necessary permissions to access all the services needed:

 - dynamoDB
 - cloudFormation  
 - S3
 - IAM
 - APiGateway
 - Cloudwatch log
 - Lambda

Once the deployment is successful, make note of the URL endpoint displayed on console to access your API.
