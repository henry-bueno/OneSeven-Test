----- OneSeven Test: Web Navigation and Validation Script (Cypress) -----

--- Overview ---
This script uses Cypress to automate the process of logging in as an existing user, navigating through three different pages of a website, and validating the correctness of each page. It’s designed as a technical test for entering OneSeven Tech, a technology company.

--- Features ---
 	- Login Automation: The script logs in as an existing user.
 	- Page Navigation: It navigates through three different pages on the same website.
 	- Validation: The script asserts that the visited pages are correct.

--- Prerequisites ---
- Node.js and npm (Node Package Manager) installed on your machine.
- Cypress installed globally (you can install it locally within your project if preferred).

1.- Installation:
	Clone this repository to your local machine:
		git clone https://github.com/henry-bueno/OneSeven-Test.git

2.- Navigate to the project directory:
	cd OneSeven-Test

3.- Install Cypress (if not already installed):
	npm install cypress

------------------------------------------------


--- Usage ---
1.- Open Cypress:
	npx cypress open

2.- In the Cypress Test Runner, click on the web_navigation_spec.js file.
3.- The script will automatically open a browser window and execute the specified steps:
	> Visiting the homepage
	> Logging in with provided credentials
	> Navigating to specific pages
	> Validating page URLs


--- Example Test [JavaScript] ---

	describe('Log In', () => {
  it('should log in successfully', () => {
    cy.visit('https://www.shopusa.com/in/');

    // ... other steps (clicking, waiting, entering credentials) ...

    cy.url().should('eq', 'https://www.shopusa.com/in/shipping/');

    cy.get('#rdnavbartoggle').click();
    cy.get('#scroll-membership').click().wait(5000);
    cy.url().should('eq', 'https://www.shopusa.com/blog/india/');
    cy.get('.cat-item-1070 > a').click().wait(5000);
    cy.url().should('eq', 'https://www.shopusa.com/blog/india/category/fashion/');
  });
});
