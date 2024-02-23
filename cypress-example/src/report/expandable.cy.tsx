import { Expandable } from './expandable'

it('expands', () => {
  cy.mount(<Expandable expanded={true}>Expandable content</Expandable>)
})
