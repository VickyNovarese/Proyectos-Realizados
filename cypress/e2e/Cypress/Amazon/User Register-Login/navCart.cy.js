import { Amazon } from "../../../../support/Page/amazon_Page"
import data from "../../../../support/fixture/amazon.json"


describe('Validate to add a product to the nav_Cart',()=>{

    beforeEach('Visit the page',()=>{
        cy.visit('https://amazon.es')
        Amazon.cookies()
       // cy.get('[class="nav-line-2 "]').click()
        Amazon.login(data.mail, data.password)
    })

    it('Add a product to the car',()=>{
        Amazon.get.searchTextBox().type(data.product)
        Amazon.get.searchSubmitButton().should('be.visible').click({force:true})
        Amazon.get.product()
            
           // .scrollIntoView()
            .should('exist')
            

        .should('be.visible')
        .click()
        Amazon.get.addToCart().click()
        cy.get('body').then(($body)=>{
            if($body.find('#attachSiNoCoverage-announce').length>0)
            {                
                Amazon.get.noEnsurance().scrollIntoView().should('be.visible').click({force:true})
            }
        Amazon.get.addToCartonfirmation().should('be.visible')
        Amazon.get.cartCountContainer().should('contain','1')
        Amazon.get.cart().click()
        Amazon.get.cartDetail().should('contain',data.product)
        Amazon.get.checkout().click()
        Amazon.get.cart().click()
        Amazon.get.cartDetail().should('contain',data.product)
        Amazon.get.eliminateItem().click()

        })
    })
       
})