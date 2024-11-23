import {form} from "../../support/Page/formPage.js"
import data from "../../support/fixture/data_fixture.json"

describe('ToolsQA | Elements | Text Box: Fill form and Submit',()=>{

        beforeEach('',()=>{
            cy.visit('https://demoqa.com/text-box')
        })

        it('TC 1:Todos los campos están vacíos',()=>{
                form.get.submit().click
        })
        it('TC 2: Validar llenar sólo Full name',()=>{ //Se muestra "Full Name: [contenido]".
            form.get.fullName().type(data.fullName.fullName)
            form.get.submit().click()
        })
        it('TC 3: Validar llenar sólo current address',()=>{  
            form.get.currentAddress().type(data.currentAddress.validCurrentAddress)
            form.get.submit().click()
            cy.get('#currentAddress.mb-1').should('be.visible')
        
        })
        it('TC 4: Validar llenar todos los campos',()=>{  
            form.get.fullName().type(data.fullName.fullName)
            form.get.userEmail().type(data.email.validEmail)
            form.get.currentAddress().type(data.currentAddress.validCurrentAddress)
            form.get.permanentAddress().type(data.permanentAddress.validPermanentAddress)
            form.get.submit().click()
            cy.get('#email.mb-1').should('be.visible')
            cy.get('#name.mb-1').should('be.visible')
            cy.get('#currentAddress.mb-1').should('be.visible')
            cy.get('#permanentAddress.mb-1').should('be.visible')
        })
        it('TC 5: Llenar "Full Name" con espacios vacíos',()=>{ 
            form.get.fullName().type(data.fullName.fullNameSpaces)
            form.get.userEmail().type(data.email.validEmail)
            form.get.currentAddress().type(data.currentAddress.validCurrentAddress)
            form.get.permanentAddress().type(data.permanentAddress.validPermanentAddress)
            form.get.submit().click()
            cy.get('#email.mb-1').should('be.visible')
            cy.get('#name.mb-1').should('be.visible')
            cy.get('#currentAddress.mb-1').should('be.visible')
            cy.get('#permanentAddress.mb-1').should('be.visible')
            
        })
        it('TC 6: Ingresar un email vacío',()=>{  

            form.get.fullName().type(data.fullName.fullName)
            form.get.currentAddress().type(data.currentAddress.validCurrentAddress)
            form.get.permanentAddress().type(data.permanentAddress.validPermanentAddress)
            form.get.submit().click()
            
            cy.get('#name.mb-1').should('be.visible')
            cy.get('#email.mb-1').should('not.exist')
            cy.get('#currentAddress.mb-1').should('be.visible')
            cy.get('#permanentAddress.mb-1').should('be.visible')
        })
        it('TC 7:Ingresar un email sin @. ',()=>{  //examplemail.com.Borde rojo y mensaje de error: "Invalid email format".
            form.get.fullName().type(data.fullName.fullName)
            form.get.userEmail().type(data.email.emailWithoutArroba)
            form.get.currentAddress().type(data.currentAddress.validCurrentAddress)
            form.get.permanentAddress().type(data.permanentAddress.validPermanentAddress)
            form.get.submit().click()

            cy.get('#name.mb-1').should('not.exist')
            cy.get('#email.mb-1').should('not.exist')
            cy.get('#currentAddress.mb-1').should('not.exist')
            cy.get('#permanentAddress.mb-1').should('not.exist')
            cy.get('[class="mr-sm-2 field-error form-control"]').should('be.visible')
        
        })
        it('TC 8: Ingresar un email sin caracteres antes del @',()=>{  //e.g., @mail.com Borde rojo y mensaje de error: "Invalid email format"
            form.get.fullName().type(data.fullName.fullName)
            form.get.userEmail().type(data.email.emailWithoutNothingBeforeArroba)
            form.get.currentAddress().type(data.currentAddress.validCurrentAddress)
            form.get.permanentAddress().type(data.permanentAddress.validPermanentAddress)
            form.get.submit().click()
          
            cy.get('#name.mb-1').should('not.exist')
            cy.get('#currentAddress.mb-1').should('not.exist')
            cy.get('#permanentAddress.mb-1').should('not.exist')
            cy.get('[class="mr-sm-2 field-error form-control"]').should('be.visible')
        })
        it('TC 9:Ingresar un email sin caracteres después del @ ',()=>{  //(e.g., example@.com) Borde rojo y mensaje de error: "Invalid email format".
            form.get.fullName().type(data.fullName.fullName)
            form.get.userEmail().type(data.email.emailWithoutNothingAfterArroba)
            form.get.currentAddress().type(data.currentAddress.validCurrentAddress)
            form.get.permanentAddress().type(data.permanentAddress.validPermanentAddress)
            form.get.submit().click()

            cy.get('#name.mb-1').should('not.exist')
            cy.get('#email.mb-1').should('not.exist')
            cy.get('#currentAddress.mb-1').should('not.exist')
            cy.get('#permanentAddress.mb-1').should('not.exist')
            cy.get('[class="mr-sm-2 field-error form-control"]').should('be.visible')
        })
        it('TC 10:Ingresar un email sin un punto (.) después del @',()=>{  // (e.g., example@mailcom). Borde rojo y mensaje de error: "Invalid email format".
            form.get.fullName().type(data.fullName.fullName)
            form.get.userEmail().type(data.email.mailWithoutDotAfterArroba)
            form.get.currentAddress().type(data.currentAddress.validCurrentAddress)
            form.get.permanentAddress().type(data.permanentAddress.validPermanentAddress)
            form.get.submit().click()
            cy.get('#name.mb-1').should('not.exist')
            cy.get('#email.mb-1').should('not.exist')
            cy.get('#currentAddress.mb-1').should('not.exist')
            cy.get('#permanentAddress.mb-1').should('not.exist')
            cy.get('[class="mr-sm-2 field-error form-control"]').should('be.visible')
        })
        it('TC 11:Ingresar un email con menos de 2 caracteres después del punto',()=>{  // (e.g., example@mail.c) Borde rojo y mensaje de error: "Invalid email format".
            form.get.fullName().type(data.fullName.fullName)
            form.get.userEmail().type(data.email.emailWithLessThanTwoCharactersBeforeDot)
            form.get.currentAddress().type(data.currentAddress.validCurrentAddress)
            form.get.permanentAddress().type(data.permanentAddress.validPermanentAddress)
            form.get.submit().click()
            cy.get('#name.mb-1').should('not.exist')
            cy.get('#email.mb-1').should('not.exist')
            cy.get('#currentAddress.mb-1').should('not.exist')
            cy.get('#permanentAddress.mb-1').should('not.exist')
            cy.get('[class="mr-sm-2 field-error form-control"]').should('be.visible')
        })
        it('TC 12:Ingresar un email válido.',()=>{  //  (e.g., example@mail.com) Se muestra "Email: example@mail.com" en un párrafo.
            form.get.fullName().type(data.fullName.fullName)
            form.get.userEmail().type(data.email.validEmail)
            form.get.currentAddress().type(data.currentAddress.validCurrentAddress)
            form.get.permanentAddress().type(data.permanentAddress.validPermanentAddress)
            form.get.submit().click()
            cy.get('#name.mb-1').should('be.visible')
            cy.get('#email.mb-1').should('be.visible')
            cy.get('#currentAddress.mb-1').should('be.visible')
            cy.get('#permanentAddress.mb-1').should('be.visible')
            
        })
        it('TC 13: Ingresar un email válido con subdominios ',()=>{  // (e.g., user@mail.co.uk).
            form.get.fullName().type(data.fullName.fullName)
            form.get.userEmail().type(data.email.validEmail)
            form.get.currentAddress().type(data.currentAddress.validCurrentAddress)
            form.get.permanentAddress().type(data.permanentAddress.validPermanentAddress)
            form.get.submit().click()
            cy.get('#name.mb-1').should('be.visible')
            cy.get('#email.mb-1').should('be.visible')
            cy.get('#currentAddress.mb-1').should('be.visible')
            cy.get('#permanentAddress.mb-1').should('be.visible')
            
        })
        it.only('TC 14: Ingresar un email con espacios',()=>{  // (e.g., example @mail.com) error, borde
            
            form.get.userEmail().invoke('val', data.email.emailWithSpaces)
            .should('have.value','maria @ mail . com')
            form.get.submit().click()
            cy.get('[class="mr-sm-2 field-error form-control"]').should('be.visible')        

        })
        it('TC 15:Ingresar un email con caracteres especiales inválido',()=>{  //  (e.g., user!@mail.com)
            form.get.userEmail().type(data.email.invalidMail)
            form.get.submit().click()
            cy.get('[class="mr-sm-2 field-error form-control"]').should('be.visible')    
        })
        
        it('TC 17:Combinación de campos llenos y email inválido',()=>{  //  (e.g., user!@mail.com)
            form.get.fullName().type(data.fullName.fullName)
            form.get.userEmail().type(data.email.invalidMail)
            form.get.currentAddress().type(data.currentAddress.validCurrentAddress)
            form.get.permanentAddress().type(data.permanentAddress.validPermanentAddress)
            form.get.submit().click()

            cy.get('#name.mb-1').should('not.exist')
            cy.get('#email.mb-1').should('not.exist')
            cy.get('#currentAddress.mb-1').should('not.exist')
            cy.get('#permanentAddress.mb-1').should('not.exist')
            cy.get('[class="mr-sm-2 field-error form-control"]').should('be.visible')

        })
        

        
        
    })