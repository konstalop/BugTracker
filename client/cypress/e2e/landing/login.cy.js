/**
 * Test login functionality and component
 */

describe('Test home page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Login to the application', () => {
        cy.get('.input-auth').eq(0).type('test@test.com')
        cy.get('.input-auth').eq(1).type('test')
        cy.get('.input-auth-submit').click()
        cy.get('.home-wrapper').should('exist').contains('Home')
    })
})