
describe('Validate buttons',()=>{
    beforeEach('Visit page',()=>{
        cy.visit('https://demoqa.com/buttons')
    })
it('Validate double click button',()=>{
    cy.get('#doubleClickBtn').should('be.visible').dblclick()
    cy.get('#doubleClickMessage').should('be.visible')
    .should('contain','You have done a double click')
})
it('Validate right click button',()=>{
    cy.get('#rightClickBtn').should('be.visible').rightclick()
    cy.get('#rightClickMessage').should('be.visible')
    .should('contain','You have done a right click')
})
it('Validate click button',()=>{
    cy.get('[class="mt-4"]').eq(1).should('be.visible').contains('Click Me').click()
    cy.get('#dynamicClickMessage',  { timeout: 10000 }).should('be.visible')
    .should('contain','You have done a dynamic click')
})
})
