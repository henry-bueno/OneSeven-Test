Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignora los errores no detectados
  return false;
});

describe('Log In', () => {
  it('should log in successfully', () => {
    // Visita el sitio web
    cy.visit('https://www.shopusa.com/in/');

    // Haz clic en el enlace "Login" forzando el clic en un elemento oculto
    cy.contains('Login').click({force: true});

    // Espera 2 segundos para asegurar que la página se ha cargado completamente
    cy.wait(2000);

    // Ingresa el correo electrónico y la contraseña
    cy.get('#txtsuiteID').click().type('buenoscypherz@gmail.com');
    cy.get('#txtpassword').click().type('standardpassword07');

    // Envía el formulario de inicio de sesión
    cy.get('#loginbutton').click().wait(5000);
    cy.url().should('eq', 'https://www.shopusa.com/in/shipping/'); 


    // Haz clic en "navbar"
    cy.get('#rdnavbartoggle').click();

    // Haz clic en "shopping"
    cy.get('#scroll-membership').click().wait(5000);
    cy.url().should('eq', 'https://www.shopusa.com/blog/india/'); 
    cy.get('.cat-item-1070 > a').click().wait(5000);
    cy.url().should('eq', 'https://www.shopusa.com/blog/india/category/fashion/'); 

  });
});
