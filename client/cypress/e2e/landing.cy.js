/**
 * Test the landing page of the application
 */
describe('Landing page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    
    it('renders login form and registering', () => {
        cy.get('.form-auth').should('exist')
        cy.get('.input-auth-submit').should('exist')
        cy.get('.input-auth-demo').should('exist')
        cy.get('.input-auth-register').should('exist')
    })

    it('Create account button takes you to registering', () => {
        cy.get('.input-auth-register').click()
        cy.get('.form-auth').should('exist').contains('Sign up')
        cy.get('.new-user-text').click()
    })
}) 