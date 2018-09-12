describe('Login on Github', () => {
    const password = Cypress.env('PASSWORD')
    const username = Cypress.env('USERNAME')

    beforeEach(() => {
        cy.visit('/login')
    })

    it('should show the Username field when the page is loaded', () => {
        cy.get('#login_field').should('be.visible')
    })

    it('should show the Forgot passoword? link when the page is loaded', () => {
        cy.contains('Forgot password?').should('have.attr', 'href', '/password_reset')
    })

    it('should show the Password field when the page is loaded', () => {
        cy.get('#password').should('be.visible')
    })

    it('should show the Sign in button when the page is loaded', () => {
        cy.get('input[value="Sign in"]').should('be.visible')
    })

    it('should show Create an account link', () => {
        cy.contains('Create an account').should('have.attr', 'href', '/join?source=login')
    })

    it('should show an error when the Sign in button is clicked on the empty form', () => {
        cy.get('input[value="Sign in"]').click()
        cy.get('#js-flash-container').should('be.visible')
    })

    it('should require a username', () => {
        cy.get('#password').type(`${password}{enter}`)
        cy.contains('Incorrect username or password.')
    })

    it('should require a password', () => {
        cy.get('#login_field').type(`${username}{enter}`)
        cy.contains('Incorrect username or password.')
    })

    it('should successful login', () => {
        cy.get('#login_field').type(username)
        cy.get('#password').type(`${password}{enter}`)

        cy.get('.btn-primary[href="/new"]').should('be.visible')
    })
})