describe('simple', () => {
  it('s', () => {
    cy.mount(<div>Test1</div>)
    cy.contains('Test1').should('be.visible')
  })
})

// describe('complex', () => {
//   describe('nested', () => {
//     describe('deeply', () => {
//       it('c.n.d', async () => {
//         cy.mount(<div>Test2</div>);
//         cy.contains('Test2').should('be.visible');
//       });
//     });
//   });
//   describe('sibling', () => {
//     it('c.s', () => {
//       cy.mount(<div>Test3</div>);
//         cy.contains('Test3').should('be.visible');
//     });
//   });
// });

// describe('another complex', () => {
//   describe('nested', () => {
//     describe('deeply', () => {
//       it('c.n.d', () => {
//         cy.mount(<div>Test2</div>);
//         cy.contains('Test2').should('be.visible');
//       });
//     });
//   });
//   describe('sibling', () => {
//     it('c.s', () => {
//       cy.mount(<div>Test3</div>);
//         cy.contains('Test3').should('be.visible');
//     });
//   });
// });
