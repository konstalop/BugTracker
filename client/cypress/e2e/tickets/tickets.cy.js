/**
 * Test list view of all tickets
 */
describe('Try loading page without logging in', () => {
    it('Load /tickets page', () => {
        cy.visit('/tickets') 
        cy.get('.form-auth').should('exist')
    })
})

describe('Login and load /tickets', () => {
    it('Login with test user', () => {
            cy.get('.input-auth').eq(0).type('test@test.com')
            cy.get('.input-auth').eq(1).type('test')
            cy.get('.input-auth-submit').click()
    })

    it('Navigate to tickets page', () => {
        cy.get('.sidebar-wrapper').should('exist')
            .get('.sidebar-text').eq(1).click()
        cy.get('.tickets-wrapper').should('exist')
            .get('.tickets-h1').contains('My Tickets')
        cy.get('.tickets-table').should('exist').get('.tickets-h2').contains('Tickets')
    })
}) 