import React from 'react'
import App from './App'

describe('Main', () => {
  it('loads a simple div', () => {
    cy.mount(<>Testing123</>)
    // Cypress does not have a built-in image snapshot feature
    // https://on.cypress.io/visual-testing
  })

  it('Has a landing page', () => {
    cy.mount(<App />)
  })

  it('Does not break regular expects', () => {
    cy.mount(<App />)
    expect(1).to.equal(1)
  })

  it.skip('can do many interactions fast', () => {
    const Counter = () => {
      const [count, setCount] = React.useState(0)
      return (
        <div>
          <button onClick={() => setCount(count + 1)}>Count is {count}</button>
        </div>
      )
    }
    cy.mount(<Counter />)
    cy.contains('Count is 0').should('be.visible')
    for (let i = 1; i <= 500; i++) {
      cy.get('button:not(a)', { log: false }).click({ log: false })
      cy.contains(`Count is ${i}`, { log: false }).should('be.visible')
    }
  })

  describe.skip('many small tests', () => {
    for (let i = 0; i < 50; i++) {
      it(`stress test ${i} run`, () => {
        const Counter = () => {
          const [count, setCount] = React.useState(0)
          return (
            <div>
              Viewing test #{i}
              <button onClick={() => setCount(count + 1)}>
                Count is {count}
              </button>
            </div>
          )
        }
        cy.mount(<Counter />)
        cy.contains('Count is 0').should('be.visible')
        cy.get('button:not(a)').click()
        cy.get('button:not(b)').click()
        cy.get('button:not(c)').click()
        cy.contains('Count is 3').should('be.visible')
        cy.get('button:not(d)').click()
        cy.get('button:not(e)').click()
        cy.get('button:not(f)').click()
        cy.contains('Count is 6').should('be.visible')
      })
    }
  })

  it.only('can use the bridge function', () => {
    let count = 0
    let forceNumber: (num: number) => void = () => {}
    const Counter = () => {
      const forceRender = React.useReducer(() => count, 0)[1]
      forceNumber = (n) => {
        count = n
        forceRender()
      }
      return (
        <div>
          <button
            onClick={() => {
              count++
              forceRender()
            }}
          >
            Count is {count}
          </button>
        </div>
      )
    }

    cy.mount(<Counter />)
    cy.contains('Count is 0')
    cy.get('button').click()
    cy.contains('Count is 1').then(() => {
      forceNumber(50)
    })
    cy.contains('Count is 50')
    cy.get('button').click()
    cy.contains('Count is 51')
  })
})
