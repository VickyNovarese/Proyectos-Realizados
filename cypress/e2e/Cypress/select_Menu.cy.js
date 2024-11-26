	import { Menu } from "../../support/Page/menu_select_Page";
	describe("✅ToolsQA | Widgets | Dropdown - Select Menu", () => {
	beforeEach(() => {
		cy.visit("https://demoqa.com/select-menu");
	});

	it("Validar las diferentes opciones del select value", () => {
		Menu.get.selectMenu().click();
		Menu.get.group1().should("be.visible").should("have.text", "Group 1");
		Menu.get.group2().should("be.visible").should("have.text", "Group 2");
		Menu.get
		.option1_1()
		.should("be.visible")
		.should("have.text", "Group 1, option 1");
		Menu.get
		.option1_2()
		.should("be.visible")
		.should("have.text", "Group 1, option 2");
		Menu.get
		.option2_1()
		.should("be.visible")
		.should("have.text", "Group 2, option 1");
		Menu.get
		.option2_2()
		.should("be.visible")
		.should("have.text", "Group 2, option 2");
		Menu.get.root().should("be.visible").should("have.text", "A root option");
		Menu.get
		.root2()
		.should("be.visible")
		.should("have.text", "Another root option");
	});

	it("Validar seleccionar varias opciones del select value", () => {
		Menu.get.selectMenu().click();
		Menu.get
		.option1_1()
		.should("be.visible")
		.should("have.text", "Group 1, option 1")
		.click();
		Menu.get.selectMenu().click();
		Menu.get
		.option2_2()
		.should("be.visible")
		.should("have.text", "Group 2, option 2")
		.click();
		Menu.get.selectMenu().click();
		Menu.get.root2().should("have.text", "Another root option").click();
	});
	it("Validar las opciones en el select one", () => {
		Menu.get.selectOne().click();
		Menu.get.selectOneOption().then((options) => {
		expect(options[0]).to.have.text("Dr.");
		expect(options[1]).to.have.text("Mr.");
		expect(options[2]).to.have.text("Mrs.");
		expect(options[3]).to.have.text("Ms.");
		expect(options[4]).to.have.text("Prof.");
		expect(options[5]).to.have.text("Other");
		});
	});

	it("Validar selecionar las opcion 'Dr.' en el select one", () => {
		Menu.get.selectOne().click();
		Menu.get.selectOneOption().then((option) => {
		option[0].click();
		});
	});

	it("Validar selecionar las opcion 'Other' en el select one", () => {
		Menu.get.selectOne().click();
		Menu.get.selectOneOption().then((option) => {
		option[5].click();
		});
	});

	it("Validar selecionar las opcion 'Mrs.' en el select one", () => {
		Menu.get.selectOne().click();
		Menu.get.selectOneOption().then((option) => {
		option[2].click();
		});
	});
	it("Validar seleccionar una opción del Old Style Select Menu", () => {
		Menu.get.oldSelect().then((select) => {
		cy.wrap(select).select("Red").should("have.value", "red");
		cy.wrap(select).select("Indigo").should("have.value", "8");
		cy.wrap(select).select("Aqua").should("have.value", "10");
		});
	});

	it("Validar seleccionar varias opciones del Multiselect drop down", () => {
		Menu.get.multiselect().eq(2).click();
		Menu.get.multiselectOption().then((options) => {
		cy.wrap(options[0]).click();
		cy.wrap(options[1]).click();
		cy.wrap(options[2]).click();
		cy.wrap(options[3]).click();
		});
		Menu.get
		.optionsSelected()
		.should("be.visible")
		.should("contain", "Red", "Black", "Blue", "Green");
		Menu.get
		.noMoreOptions()
		.should("be.visible")
		.should("contain", "No options");
	});
	it("Validar seleccionar varias opciones del stantard multiselect", () => {
		Menu.get.autos().then((select) => {
		cy.wrap(select).select(["volvo", "opel"]).should("be.visible");
		});
	});
	});
