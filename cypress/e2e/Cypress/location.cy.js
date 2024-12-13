describe('location',()=>{


    beforeEach('Visit page',()=>{
        cy.visit("https://demoqa.com")
    })

    it('Validate Title',()=>{
        cy.title ().should('eq','DEMOQA')
    })
    it('Validate Url',()=>{
        cy.url ().should('eq','https://demoqa.com/')
    })

    it('Validate Protocol',()=>{
        cy.location('protocol').should('contain','https')
    })

    it('Validate Protocol',()=>{
        cy.location('hostname').should('eq','demoqa.com')
    })

    it('Validate an endpoint',()=>{

        cy.get('.category-cards .card.mt-4.top-card').eq(0).click()
        cy.location('pathname').should('eq','/elements')
    })


})