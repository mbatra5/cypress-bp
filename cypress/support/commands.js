// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
Cypress.Commands.add("selectProduct", (productName) => { 
    
    cy.get('h4.card-title').each(($e1, index, $list) => {

    const text = $e1.text()
    if(text.includes(productName))
    {
        cy.get('button.btn.btn-info').eq(index).click()
    }
  })
})

Cypress.Commands.add('mockGeolocation', (latitude, longitude) => {
	cy.window().then(($window) =>  {
		cy.stub($window.navigator.geolocation, 'getCurrentPosition', (callback) => {
	   		return callback({ coords: { latitude, longitude } });
		});
	});
});

// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
