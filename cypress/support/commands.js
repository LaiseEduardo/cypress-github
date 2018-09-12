Cypress.Commands.add("login", (username, password) => {
    cy.visit('/login')
    cy.get('#login_field').type(username)
    cy.get('#password').type(`${password}{enter}`)
    cy.get('.btn-primary[href="/new"]').should('be.visible')
})
