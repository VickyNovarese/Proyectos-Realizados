import data from '../../../../support/fixture/amazon.json'

describe("User account",()=>{
    beforeEach('Visit page',()=>{
        cy.visit('https://amazon.es')
    })

    it('Register a new user account',()=>{
        cy.get('[class="nav-line-2 "]').click()
        cy.get('#createAccountSubmit').click()
        cy.get('#ap_customer_name').type(data.fullName)
        cy.get('#ap_email').type(data.mail)
        cy.get('#ap_password').type(data.password)
        cy.get('#ap_password_check').type(data.password)
        cy.get('#continue').click()
    })
    it('Login',()=>{
        cy.get('[class="nav-line-2 "]').click()
        cy.get('#ap_email').type(data.mail)
        cy.get('#continue').click()
        cy.get('#ap_password').type(data.password)
        cy.get('#signInSubmit').click()
    })
    
})