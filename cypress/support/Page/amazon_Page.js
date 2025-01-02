class amazon {
    get={
        cookies:()=>cy.get('#sp-cc-accept'),
        account:()=>cy.get('#nav-link-accountList-nav-line-1'),
        menuAccount:()=>cy.get('#nav-al-wishlist'),
        identify:()=>cy.get('#nav-al-signin .nav-action-inner'),
        emailInput:()=>cy.get('#ap_email'),
        continueButton:()=>cy.get('#continue'),
        passwordInput:()=>cy.get('#ap_password'),   
        submitButton:()=> cy.get('#signInSubmit'),
        accountLabel:()=>cy.get('#nav-link-accountList'),
        labelOrder:()=>cy.get('[class="nav-line-1"]'),
        searchTextBox:()=>cy.get('#twotabsearchtextbox'),
        searchSubmitButton:()=>cy.get('#nav-search-submit-button'),
        product:()=>cy.get('[data-csa-c-item-id="amzn1.asin.1.B09TLGRNJK"]').eq(0),
        addToCart:()=>cy.get('#add-to-cart-button'),
        noEnsurance:()=>cy.get('#attachSiNoCoverage'),
        warranty:()=>cy.get('#attach-warranty-pane'),
        addToCartonfirmation:()=>cy.get('#add-to-cart-confirmation-image'),
        cartCountContainer:()=>cy.get('#nav-cart-count-container'),
        cart:()=>cy.get('#nav-cart'),
        cartDetail:()=>cy.get('#activeCartViewForm'),
        myAccount:()=>cy.get('[class="nav-bb-right"]'),
        checkout:()=>cy.get('#desktop-ptc-button-celWidget'),
        mail:()=>cy.get('#ap_email'),
        continueButton:()=>cy.get('#continue'),
        password:()=>cy.get('#ap_password'),
        eliminateItem:()=>cy.get('[data-feature-id="delete"]')
        




    }


    cookies() {
            
    cy.get('body').then(($body)=>{       

        if($body.find('#sp-cc-accept').length>0)
        {
            Amazon.get.cookies().click()

        }
        else if($body.find('#gw-card-layout').length>0)
            {
                Amazon.get.myAccount().click()
            }
    })
}

    login(mail, password){
        Amazon.get.account().trigger('mouseover')
        Amazon.get.menuAccount().should('be.visible')
        Amazon.get.identify().click({force:true})
        Amazon.get.mail().type(mail)
        Amazon.get.continueButton().click()
        Amazon.get.password().type(password)
        Amazon.get.submitButton().click()
    }
}
    

export const Amazon = new amazon() 