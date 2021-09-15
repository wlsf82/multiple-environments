it('searching for "javascript" returns results', () => {
  cy.intercept('GET', '**/search**').as('getStories')
  cy.visit('/')
  cy.wait('@getStories')

  cy.search('javascript')

  cy.get('div span a')
    .its('length')
    .should('be.oneOf', [20, 100])
})
