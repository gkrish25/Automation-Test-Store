Feature: Login to tha bank website using Customer and Admin credentials

Scenario: Check the login to Customar account
    Given I open Automation Test store
    When I click on Account button
    Then I enter the username and Password

Scenario: Login to Automation test store using command line
    Given I lauch Automation test store