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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
            //inputs
            cy.get('#firstName').type('Carlos Henrique')
            cy.get('#lastName').type('Farneze Berenguer')
            cy.get('#email').type('carlos_berenguer@qat.com')
            cy.get('#phone').type('(34)988100491')        
            
            //TextAreas
            cy.get('#open-text-area').type('teste Text Area')
                        
            //Button
            cy.contains('button', 'Enviar').click()
            
            //Success Message
            cy.get('.success').should('be.visible')
})