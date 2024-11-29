import data from '../../../../support/fixture/amazon.json'
import { Amazon } from '../../../../support/Page/amazon_Page'
describe('Login',()=>{
    
    beforeEach('Access to Amazon',()=>{
        cy.visit('https://amazon.es')
        cy.get('body').then(($body)=>{
            if($body.find('#sp-cc-accept').length>0)
            {
                Amazon.get.cookies().click()
            }
        })
        
    })
    it('Login',()=>{
        Amazon.login(data.mail, data.password)
        Amazon.get.accountLabel().should('exist').should('contain','Carlos')
        .should('exist')
        cy.url(data.url)

    })


})