
import { page } from "../../support/Page/FindPage";

describe('Ejercicio 2: Buscar en Internet una palabra', () => {
beforeEach(() => {
cy.viewport(1080,720);
cy.visit('https://www.google.com');

});
 // Caso de prueba 1: Buscar la palabra "automatización"
it('TC 1: Buscar la palabra automatización', () => {
    // Llama a la función findPage() definida en page para realizar la búsqueda
page.findPage();
});
// Caso de prueba 2: Hacer clic en el enlace de Wikipedia
it('TC 2: Hacer clic en el enlace de Wikipedia', () => {
// Llama a la función findPage() definida en page para realizar la búsqueda
page.findPage();
// Luego, hace clic en el enlace de Wikipedia
cy.contains('Automatización - Wikipedia, la enciclopedia libre',{ timeout: 4000 }).click();  
});
// Caso de prueba 3: Verificar el contenido de la página de Wikipedia
it('TC 3: Verificar el contenido de la página de Wikipedia', () => {
    // Llama a la función findPage() definida en page para realizar la búsqueda
    page.findPage();
    // Luego, hace clic en el enlace de Wikipedia
    cy.contains('Automatización - Wikipedia, la enciclopedia libre',{ timeout: 4000 }).click();  
    // Luego, verifica el contenido en la página de Wikipedia
    cy.origin('https://es.wikipedia.org', () => {
    //verifica que contenga el texto "primer proceso" y saca una captura de la pantalla
    cy.contains('primer proceso').should('be.visible').screenshot();
    cy.contains('1785').should('be.visible');
    });
    });
})

