import { Link } from './link.tsx'

it('links', () => {
  cy.mount(<Link href="https://example.com">example</Link>)
  cy.contains('a', 'example')
    .should('be.visible')
    .and('have.attr', 'target', '_blank')
})
