Feature: Sub-customer API

  Scenario: Create sub-customer
    When I create a sub-customer with customerId "customer1", subCustomerId "subcustomer1", and subCustomerName "Sub-customer 1"
    Then the response status should be 201
    And the response should contain the created sub-customer data

  Scenario: Update sub-customer
    When I update the sub-customer with customerId "customer1", subCustomerId "subcustomer1", and new subCustomerName "Updated Sub-customer 1"
    Then the response status should be 200
    And the response should contain the updated sub-customer data