describe('Repository operations', () => {
    const repoName = `test-${new Date().getTime()}`
    const username = Cypress.env('USERNAME')
    const password = Cypress.env('PASSWORD')

    beforeEach(() => {
        cy.login(username,password)
    })

    it('should create a new repository', () => {
        cy.get('.btn-primary[href="/new"]').click()
        cy.get('#repository_name').type(repoName)
        cy.contains('Create repository').click()
    })

    it('should commit a file', () => {
        cy.visit(`/${username}/${repoName}`)
        cy.get(`a[href="/${username}/${repoName}/new/master?readme=1"]`).click()
        cy.get('#commit-summary-input').type('add README file')
        cy.get('#submit-file').click()
    })

    it('should delete the repository', () => {
        cy.visit(`/${username}/${repoName}`)
        cy.get(`a[href="/${username}/${repoName}/settings"]`).click()
        cy.contains('Delete this repository').click()
        cy.get(`form[action="/${username}/${repoName}/settings/delete"] .form-control.input-block`).type(repoName)
        cy.get(`form[action="/${username}/${repoName}/settings/delete"] .btn-block.btn-danger`).click()

        cy.contains(`Your repository "${username}/${repoName}" was successfully deleted`).should('be.visible')
    })

    after(() => {
        cy.clearCookies()
    })
})
