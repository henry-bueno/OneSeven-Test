Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignore undetected bugs
  return false;
});

describe('Log In', () => {
  it('should log in successfully', () => {
    // Visits homepage
    cy.visit('https://www.shopusa.com/in/');

    // Clicks on the "Login" button, forcing the click on a hidden element
    cy.contains('Login').click({force: true});

    // Awaits 2 seconds to ensure the webpage is completely loaded
    cy.wait(2000);

    // Enters the Login e-mail and password values
    cy.get('#txtsuiteID').click().type('buenoscypherz@gmail.com');
    cy.get('#txtpassword').click().type('standardpassword07');

    // Clicks and sends the information for the Login process to be executed
    cy.get('#loginbutton').click().wait(5000);
    cy.url().should('eq', 'https://www.shopusa.com/in/shipping/'); 


    // Clicks on "navbar"
    cy.get('#rdnavbartoggle').click();

    // Clicks on "shopping"
    cy.get('#scroll-membership').click().wait(5000);
    cy.url().should('eq', 'https://www.shopusa.com/blog/india/'); 
    cy.get('.cat-item-1070 > a').click().wait(5000);
    cy.url().should('eq', 'https://www.shopusa.com/blog/india/category/fashion/'); 

  });
});
