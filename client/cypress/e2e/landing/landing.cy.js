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

    it('Test a failed login attempt alert', () => {
        cy.get('.input-auth-submit').click()
        cy.get('.alert-container').should('exist').contains('Please fill all of the fields')
    })

    it('Test wrong credentials', () => {
        cy.get('.input-auth').eq(0).type('test@test.com')
        cy.get('.input-auth').eq(1).type('123')
        cy.get('.input-auth-submit').click()
        cy.get('.alert-container').should('exist').contains('Invalid login!')
    })
}) 