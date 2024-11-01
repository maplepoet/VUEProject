describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('Project Load', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
  })
})