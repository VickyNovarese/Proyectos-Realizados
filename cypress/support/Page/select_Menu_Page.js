class menu {
    get={
        selectMenu:()=> cy.get('#withOptGroup'),
        group1:()=>cy.get('#react-select-2-group-0-heading'),
        group2:()=>cy.get('#react-select-2-group-1-heading'),
        option1_1:()=>cy.get('#react-select-2-option-0-0'),
        option1_2:()=>cy.get('#react-select-2-option-0-1'),
        option2_1:()=>cy.get('#react-select-2-option-1-0'),
        option2_2:()=>cy.get('#react-select-2-option-1-1'),
        root:()=>cy.get('#react-select-2-option-2'),
        root2:()=>cy.get('#react-select-2-option-3'),
        about:()=>cy.get('#about_sidebar_link.bm-item.menu-item'),
        logout:()=>cy.get('#logout_sidebar_link'),
        reset:()=>cy.get('#reset_sidebar_link'),
        addToCart:()=>cy.get('[class="btn_primary btn_inventory"]').eq(0),
        remove:()=>cy.get('[class="btn_secondary btn_inventory"]').eq(0),   
        shoppingCart:()=> cy.get('[class="fa-layers-counter shopping_cart_badge"]'),
        acceptCookies:()=>cy.get('#onetrust-accept-btn-handler'),
        selectOne:()=>cy.get('#selectOne'),
        selectOneOption:()=>cy.get('[id^="react-select-3-option-0-"]'),
        oldSelect:()=>cy.get('#oldSelectMenu'),
        multiselect:()=> cy.get('.css-yk16xz-control'),
        multiselectOption:()=>cy.get('[id^="react-select-4-option-"]'),
        optionsSelected:()=>cy.get('.css-2b097c-container'),
        noMoreOptions:()=>cy.get('.css-1gl4k7y'),
        cars:()=>cy.get('#cars')

    }
}

export const Menu = new menu() 