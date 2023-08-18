class Pagina {
	get = {
		imput: () => cy.get('#APjFqb'),
		Boton: () => cy.get('[name="btnK"]'),
		Pagina2: () => cy.get('[aria-label="Page 2"]'),
		cookies:()=> cy.get('#L2AGLb')
	};
}
export const pagina = new Pagina;