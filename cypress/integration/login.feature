Feature: User log in
  As a user I want to be able to login to the site with my username and password 

  Scenario: Connecting to the site with valid credentials
    Given Yousign log-in page is opened
    When User puts its credentials into the username and password fields
      | username                | password        |
      | yana.burdziuk@gmail.com | NolanKubrick94* |
    And User clicks on login button
    Then User is connected
