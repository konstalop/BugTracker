/**
 * Test viewing a project
 */
describe('Accessing project without logging in', () => {
    it('Access project without accesstoken', () => {
        cy.visit('/project/1')
        cy.get('.form-auth').should('exist')
    })      
})

describe('Login and load project without permissions', () => {
    it('Login & try to load project', () => {
        cy.get('.input-auth').eq(0).type('test@test.com')
        cy.get('.input-auth').eq(1).type('test')
        cy.get('.input-auth-submit').click()
        cy.get('.project-view-container').should('exist')
            .get('img').should('exist')
    })
})

describe('Login and navigate to a project page', () => {
    it('Login with test user', () => {
        cy.visit('/')
        cy.get('.input-auth').eq(0).type('test@test.com')
        cy.get('.input-auth').eq(1).type('test')
        cy.get('.input-auth-submit').click()
    })

    it('Create a new project', () => {
        cy.get('.sidebar-wrapper').should('exist')
            .get('.new-button').should('exist').click()
        cy.get('.create-project').should('exist')
        cy.get('.create-project-inner').get('.input-project-title').type('Cypress test title')
        cy.get('.create-project-inner').get('.input-project-desc').type('Cypress test desc')
        cy.get('.create-project-inner').get('.save-button').click()
    })

    it('Open up a project', () => {
        cy.get('.projects-table').should('exist')
            .get('.project-name').eq(1).click()
    })

    it('Make sure url directs to /project/', () => {
        cy.url().should('include', '/project/')
    })

    it('Make sure key components are there', () => {
        cy.get('.project-view-container').should('exist')
        cy.get('.tickets-project-container').should('exist')
        cy.get('.project-team-container').should('exist')
        cy.get('.ticket-view-container').should('exist')
    })
})

describe('Try creating a ticket', () => {
    it('Open new ticket modal', () => {
        cy.get('.tickets-project-container').get('.new-ticket').click()
        cy.get('.manage-ticket').should('exist')
    })

    it('Fill ticket form', () =>  {
        cy.get('.input-ticket-title').type('Cypress test ticket')
        cy.get('.input-ticket-desc').type('Cypress desc information')
        cy.get('.input-ticket-time').type('25')
        cy.get('.input-ticket-option').eq(0).select('Feature')
        cy.get('.input-ticket-option').eq(1).select('Medium')
        cy.get('.input-ticket-option').eq(2).select('Closed')
    })

    it('Save ticket', () => {
        cy.get('.save-button').click()
    })

    it('Make sure ticket shows on project page', () => {
        cy.get('.ticket-row').contains('Cypress test ticket')
    })
})

describe('View full information of ticket and delete it', () => {
    it('View ticket', () => {
        cy.get('.ticket-row').contains('Cypress test ticket').click()
        cy.get('.ticket-info-table').contains('Cypress test ticket')
    })

    it('Delete ticket', () => {
        cy.get('.delete-ticket').click()
        cy.get('.confirm-container').should('exist')
            .get('.confirm-inner-container').should('exist').get('.save-button').click()
    })
})

describe('Navigate back to home page and delete project', () => {

    it('Go back to home page', () => {
        cy.get('.sidebar-text').eq(0).click()
    })


    it('Delete project', () => {
        cy.get('.project-desc').eq(1).trigger('mouseover')
            .get('button').eq(2).click({force: true})
        cy.get('.confirm-container').should('exist')
            .get('.confirm-inner-container').should('exist').get('.save-button').click()
    })

    it('Check that project was deleted', () => {
        cy.get('tr').should('have.length', 1)
    })
})