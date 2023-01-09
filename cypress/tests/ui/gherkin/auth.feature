Feature: User Sign-up and Login
  Scenario: it should redirect to the home page after login
    Given I'm not logged in
    When I login as Katharina_Bernier
    Then I should be redirected to the Home page
