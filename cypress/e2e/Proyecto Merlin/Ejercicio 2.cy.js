import { removeLogs } from "../../support/Page/RemoveLogs";
import { pagina } from "../../support/Page/PaginaWikipedia";

describe('Ejercicio 2: Buscar en Internet una palabra', () => {
beforeEach(() => {
cy.viewport(1080,720);
cy.visit('https://www.google.com');
pagina.get.cookies().click();
});
it('TC 1: Buscar la palabra automatización', () => {

    pagina.get.imput().type('automatización')
    pagina.get.Boton().eq(1).click({ force:true });
    cy.wait(3000);
    pagina.get.Pagina2().should('contain.text', '2').click({ force:true });
    cy.wait(3000);
    cy.contains('Automatización - Wikipedia, la enciclopedia libre').click();  
    cy.origin('https://es.wikipedia.org', () => {
    cy.contains('primer proceso').should('be.visible').screenshot();
    cy.contains('1785').should('be.visible');
    });
    });
})
    
removeLogs();