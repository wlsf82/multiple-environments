Cypress.Commands.add('search', term => {
  cy.get('input[type="text"]')
    .should('be.visible')
    .clear()
    .type(`${term}{enter}`)
})

Cypress.Commands.add('logSensibleData', () => {
  if (Cypress.env('environment') === 'prod') {
    Cypress.env('sensibleData', Cypress.env('prodSensibleData'))
  }
  if (Cypress.env('environment') === 'dev') {
    Cypress.env('sensibleData', Cypress.env('devSensibleData'))
  }
  cy.log(Cypress.env('sensibleData'))
})
