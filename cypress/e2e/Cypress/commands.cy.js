import credentials from "../../support/fixture/credentials.json"
describe("Login",()=>{
    beforeEach('page load',()=>{
        cy.visit('https://www.saucedemo.com/v1/')        
       

    })
    it('Validate login',()=>{
        cy.userLogin("standard_user", "secret_sauce")   
        
    })

    it('Validate logout',()=>{
        cy.userLogin("standard_user", "secret_sauce")
        cy.logout()   
    })

})