//Definición de la clase Pagina
class Page {
	//Define un objeto 'get' que contiene métodos para acceder a elementos de la página
	get = {
		findText: () => cy.get('#APjFqb'),
		AcceptBottom: () => cy.get('[name="btnK"]'),
		AcceptCookiesBottom:()=> cy.get('#L2AGLb')
	};
	findPage() {
		page.get.findText().should('be.visible').type('automatización')
		page.get.AcceptBottom().eq(1).click({ force:true });
		cy.get('h3', { timeout: 10000 }).should('be.visible');
	}
}
export const page = new Page;