const { When } = require("@badeball/cypress-cucumber-preprocessor");

When("I click on update button", () => {
  cy.get("#cart_update").click();
});

When("I click on checkout button", () => {
  cy.get("#cart_checkout1").click();
});

When("I click on Remove button", () => {
  cy.get(".product-list").find("td .btn").click();
  cy.get(".contentpanel").contains("Your cart is empty");
});
