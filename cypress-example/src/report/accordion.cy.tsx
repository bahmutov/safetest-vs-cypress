import { Accordion } from './accordion.tsx'
import { ComponentsContext } from './report'
import { Expandable } from './expandable.tsx'

it('works', () => {
  cy.mount(
    <ComponentsContext.Provider
      value={{
        Expandable,
      }}
    >
      <Accordion summary="All is good" defaultOpen>
        Accordion content is here
      </Accordion>
    </ComponentsContext.Provider>,
  )
  cy.contains('Accordion content is here').should('be.visible')
  cy.contains('[data-testid=toggle]', 'All is good').click()
  cy.contains('Accordion content is here').should('not.be.visible')
})
