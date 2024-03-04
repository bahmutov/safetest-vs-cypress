import { Expandable } from './expandable'

it('expands', () => {
  cy.mount(<Expandable expanded={true}>Expandable content</Expandable>)
  cy.contains('Expandable content').should('be.visible')
})
