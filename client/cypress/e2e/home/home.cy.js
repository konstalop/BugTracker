
/**
 * Test home page and creating / deleting projects.
 */
describe('Test loading home page without logging in', () => {

    it('Try to load homepage without correct sessiontoken', () => {
        cy.visit('/app')
        cy.get('.form-auth').should('exist')
    })
})

describe('Login and create a project', () => {
    
    it('Login', () => {
        cy.get('.input-auth').eq(0).type('test@test.com')
        cy.get('.input-auth').eq(1).type('test')
        cy.get('.input-auth-submit').click()
        cy.get('.home-wrapper').should('exist').contains('Home')
    })

    it('Open create project modal', () => {
        cy.get('.sidebar-wrapper').should('exist')
            .get('.new-button').should('exist').click()
    })

    it('Create a new project', () => {
        cy.get('.create-project').should('exist')
        cy.get('.create-project-inner').get('.input-project-title').type('Cypress test title')
        cy.get('.create-project-inner').get('.input-project-desc').type('Cypress test desc')
        cy.get('.create-project-inner').get('.save-button').click()
    })

    it('Make sure project shows on the list', () => {
        cy.get('table').contains('Cypress test title')
        cy.get('table').contains('Cypress test desc')
    })
})

describe('Test logging out from application', () => {

    it('Click logout button', () => {
        cy.get('.sidebar-wrapper').should('exist')
        .get('.sidebar-logout').should('exist').click()
    })

    it('Confirm logout', () => {
        cy.get('.confirm-inner-container').should('exist')
            .get('.save-button').click()
    })

    it('Make sure we are back at login page', () => {
        cy.get('.form-auth').should('exist')
    })
})