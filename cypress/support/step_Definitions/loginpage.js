const {
  Given,
  When,
  Then,
  Before,
} = require("@badeball/cypress-cucumber-preprocessor");

/*Given("I open Automation Test store", () => {
  cy.visit("https://automationteststore.com/");
  cy.url().should("include", "automationteststore");
});

When("I click on Account button", () => {
  cy.get("#customer_menu_top").click();
  cy.get("h1").should("contains.text", "Account Login");
});

Then("I enter the username and Password", () => {
  cy.get("#loginFrm_loginname").type("Gnallasw");
  cy.get("#loginFrm_password").type("Gokulash@25");
  cy.get("button").contains("Login").click();
});*/

Given("I visit Home page", () => {
  cy.visit("/");
});

Given("I lauch Automation test store", () => {
  cy.logintoAutomationStore("Gnallasw", "Gokulash@25");
});

When("I MouseOver on the {string} and click {string}", (category, product) => {
  cy.get("#categorymenu").within(() => {
    cy.get(".categorymenu").find("a").contains(category).trigger("mouseover");
    cy.get(".subcategories").find("a").contains(product).click({ force: true });
  });
});

Before(() => {
  cy.session("userSession", () => {
    cy.visit("https://automationteststore.com/");
    cy.url().should("include", "automationteststore");
    cy.get("#customer_menu_top").click();
    cy.get("h1").should("contains.text", "Account Login");
    cy.get("#loginFrm_loginname").type("Gnallasw");
    cy.get("#loginFrm_password").type("Gokulash@25");
    cy.get("button").contains("Login").click();
  });
});
