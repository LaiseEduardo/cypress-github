describe('API repository operations', () => {
    const repoName = `test-${new Date().getTime()}`
    const accessToken = Cypress.env('ACCESS_TOKEN')
    const username = Cypress.env('USERNAME')

    before(() => {
        Cypress.config('baseUrl','https://api.github.com')
    })

    it('should create a repository', () => {
        cy.request('POST', `/user/repos?access_token=${accessToken}`, { "name" : repoName})
        .then((response) => {
            expect(response.status).to.eq(201)
        })
    })

    it('should add the readme.md file', () => {
        cy.request(
            'PUT',
            `/repos/${username}/${repoName}/contents/readme.md?access_token=${accessToken}`, 
            { "path" : "/", "message": "add README file", "content" : btoa('API test')}
        )
        .then((response) => {
            expect(response.status).to.eq(201)
        })
    })

    it('should delete the repository', () => {
        cy.request('DELETE', `/repos/${username}/${repoName}?access_token=${accessToken}`)
        .then((response) => {
            expect(response.status).to.eq(204)
        })
    })
})