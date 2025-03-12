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

When ("I select any product {string}",(productName)=>{
    cy.get('.list-inline').find('.prdocutname').contains(productName).click();
    cy.get('.productname').find('.bgnone').contains(productName);
})

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

Then("I verify the Total on cart screen",()=>{
    //cy.get('.table-striped').find('td')
})