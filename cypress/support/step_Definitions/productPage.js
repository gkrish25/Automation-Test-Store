const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Then("I update the quantity {string}",(quantity)=>{
    cy.get('#product_quantity').clear().type(quantity)
})

When("I click on Add to Cart",()=>{
    cy.get('.productpagecart').click();
    cy.url().should('include','checkout/cart');
    cy.get('.heading1').contains('Shopping Cart')
})

When("I click on Add to wishlist",()=>{
    cy.get('.wishlist').find('.wishlist_add').click();
    cy.get('.wishlist_remove').should('be.visible');
})

Then("I verify the total price",()=>{
    cy.get('#product_details').within(()=>{
        let productPrice;
      cy.get('.productprice').find('.productfilneprice').then((pPrice)=>{
        productPrice = pPrice.text();
        cy.log(productPrice)
      });
      
      let quantity 
      cy.get('.quantitybox').find('#product_quantity').then((quan)=>{
        quantity = quan.val();
        cy.log(quantity)
      })
      
      cy.get('.total-price').then((price)=>{
        let totalPrice = price.text();
        cy.log(totalPrice)
      })
    })
})
