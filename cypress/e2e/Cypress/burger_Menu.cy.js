import data from "../../support/fixture/credentials.json"
import {BurgerMenu} from "../../support/Page/burger_Menu_Page"
describe('Select options of a burger menu',()=>{
    beforeEach('Visit the page',()=>{
        cy.visit('https://www.saucedemo.com/v1/')
        cy.userLogin(data[0].validUserName.userName, data[0].validUserName.password)
        cy.url('https://www.saucedemo.com/v1/inventory.html')
    })
    it('Validate that the menu expands correctly when clicked.',()=>{

        BurgerMenu.get.menu().click()
        BurgerMenu.get.allItems().should('be.visible').should('have.text','All Items')
        BurgerMenu.get.about().should('be.visible').should('have.text','About')
        BurgerMenu.get.logout().should('be.visible').should('have.text','Logout')
        BurgerMenu.get.reset().should('be.visible').should('have.text','Reset App State')
        
    })

    it('Validate that the menu options are "All Items", "About", "Logout", "Reset App State"',()=>{
        BurgerMenu.get.allItems().should('be.visible').should('have.text','All Items')
        BurgerMenu.get.about().should('be.visible').should('have.text','About')
        BurgerMenu.get.logout().should('be.visible').should('have.text','Logout')
        BurgerMenu.get.reset().should('be.visible').should('have.text','Reset App State')
    })

    it('Validate Validate to select "All items" ',()=>{
        cy.visit('https://www.saucedemo.com/v1/cart.html')
        BurgerMenu.get.menu().click()
        BurgerMenu.get.allItems().click()
        cy.url().should('eq','https://www.saucedemo.com/v1/inventory.html')

    })
    it('Validate to select the option "About" ',()=>{
    
        BurgerMenu.get.menu().click()
        BurgerMenu.get.about().invoke('css', 'display', 'block').click()
        cy.origin('https://saucelabs.com', () => {
            cy.url().should('eq', 'https://saucelabs.com/')
    
        })
        
})
    
    it('Validate to click on logout',()=>{ 
        BurgerMenu.get.menu().click()
        BurgerMenu.get.logout().click()
        cy.url().should('eq','https://www.saucedemo.com/v1/index.html')
    })
    
    it('Validate to select the option "Reset App State"',()=>{ 
        BurgerMenu.get.addToCart().should('have.text','ADD TO CART').click()
        BurgerMenu.get.shoppingCart().should('have.text','1')
        BurgerMenu.get.remove().should('have.text','REMOVE')
        cy.scrollTo('top')
        BurgerMenu.get.menu().click()
        BurgerMenu.get.reset().click()
        cy.wait(1000)
        BurgerMenu.get.remove().should('not.exist')
        cy.scrollTo('top')
        BurgerMenu.get.shoppingCart().should('not.exist')
        
    })

})













