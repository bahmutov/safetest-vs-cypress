import { Label } from './label.tsx'

it('labels', () => {
  cy.mount(<Label>hello</Label>)
  cy.contains('div', 'hello').should('be.visible')
})
