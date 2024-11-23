class Form {
    get={
        submit:()=> cy.get('#submit'),
        fullName:()=>cy.get('#userName'),
        userEmail:()=>cy.get('#userEmail'),
        currentAddress:()=>cy.get('#currentAddress'),
        permanentAddress:()=>cy.get('#permanentAddress')
    }
}

export const form = new Form 