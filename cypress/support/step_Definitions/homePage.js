const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Then('I navigate to Home page', () => {
    cy.get('.menu_home').click();
    cy.get('.banner_container').should('be.visible');
})

When ("I MouseOver on the first {string} and click {string}", (product,category)=>{
    cy.get('#categorymenu').within(()=>{
        cy.get('.categorymenu').find('a').contains(category).trigger('mouseover');
        cy.get('.subcategories').find('a').contains(product).click({force:true});
        cy.get('.heading1').contains(product);
    })
    
})