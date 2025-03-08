const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");


Given('I open Automation Test store', () => {
    cy.visit("https://automationteststore.com/")
    cy.url().should("include", "automationteststore")
})

When("I click on Account button", ()=>{
    cy.get('#customer_menu_top').click();
    cy.get('h1').should('contains.text', 'Account Login')
    
})

Then("I enter the username and Password",()=>{
    cy.get('#loginFrm_loginname').type("Gnallasw");
    cy.get('#loginFrm_password').type('Gokulash@25');
    cy.get('button').contains('Login').click();
})

Given('I lauch Automation test store', () => {
    cy.logintoAutomationStore("Gnallasw", "Gokulash@25");
})

Then('I navigate to Home page', () => {
    cy.get('.menu_home').click();
    cy.get('.banner_container').should('be.visible');
})