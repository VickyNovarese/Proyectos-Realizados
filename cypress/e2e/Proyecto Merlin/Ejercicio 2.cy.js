import { removeLogs } from "../../support/Page/RemoveLogs";

describe('This is your test project title', () => {

beforeEach(() => {
cy.visit('https://www.google.com');
cy.get('#L2AGLb').click();

});
it.only('TC 1: Buscar la palabra automatización', () => {
cy.get('#APjFqb').type('automatización')
    cy.get('[name="btnK"]').eq(1).click({ force:true });
    cy.wait(3000);
    cy.scrollTo('bottom');
    cy.get('[aria-label="Page 2"]').should('contain.text', '2').click();
    cy.wait(3000);
    cy.contains('Automatización - Wikipedia, la enciclopedia libre').click();  
    cy.origin('https://es.wikipedia.org', () => {
    cy.contains('primer proceso').should('be.visible').screenshot();
    cy.contains('1785').should('be.visible');
    
    
    });
  
    });

it('TC 2: Debería verificar el año del primer proceso automático', () => {
    cy.get('#APjFqb').type('automatización')
    cy.get('[name="btnK"]').eq(1).click({ force:true });
    cy.get('h3').should('be.visible').each((result) => {
        cy.wrap(result).should('contain.text', 'Automatización');
    });
    

    
})
    
    
});


removeLogs();