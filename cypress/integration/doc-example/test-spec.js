// test-spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('My First Test', function(){
    it ('Cypress Example',function(){
        cy.visit('https://example.cypress.io')

        cy.contains('blur').click()

        cy.url('includes', '/commands/actions')

        cy.get('.action-email').type('test@gmail.com')

        cy.get('.action-focus').type('12345678')

})})
