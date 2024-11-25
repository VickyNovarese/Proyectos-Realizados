
describe('✅ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/select-menu');
	});

	it('Validar seleccionar una opción del select value', () => {
		cy.get('#withOptGroup').eq(0).click();
		cy.get('#react-select-2-group-0-heading').click() 
		cy.get('#withOptGroup').eq(0).should('contain','Group 1, option 1')
		
	});
	it('Validar seleccionar una opción del select one', () => {
		cy.get('#selectOne').click();
		cy.get('#react-select-3-option-0-1').click(); 
		cy.get('[class=" css-1uccc91-singleValue"]').contains('Mr.').should('be.visible');
		
	});
	it('Validar seleccionar una opción del Old Style Select Menu', () => {
		cy.get('#oldSelectMenu').select('Indigo').should('have.value', '8');
				
	});
	it('Validar seleccionar varias opciones del Multiselect drop down', () => {
		cy.get('.css-tlfecz-indicatorContainer').eq(2).click();

		cy.get('#react-select-4-option-0').click();
		cy.get('#react-select-4-option-1').click();
		cy.get('#react-select-4-option-2').click();
		cy.get('#react-select-4-option-3').click();
		cy.get('.css-12jo7m5').should('be.visible').should('contain','Red')
		.should('contain', 'Black')
		.should('contain', 'Blue')
		.should('contain','Green')
		cy.get('.css-1gl4k7y').should('be.visible');
	});
	it('Validar seleccionar varias opciones del stantard multiselect', () => {
		cy.get('#cars').select('volvo').should('be.visible');
		cy.get('#cars').select('saab').should('be.visible');
		cy.get('#cars').select('opel').should('be.visible');
		cy.get('#cars').select('audi').should('be.visible');
	});
});