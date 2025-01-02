class burgerMenu {
    get={
        menu:()=> cy.get('[class="bm-burger-button"]'),
        allItems:()=>cy.get('#inventory_sidebar_link'),
        itemsMenu:()=>cy.get('[class="bm-menu-wrap"]'),
        about:()=>cy.get('#about_sidebar_link.bm-item.menu-item'),
        logout:()=>cy.get('#logout_sidebar_link'),
        reset:()=>cy.get('#reset_sidebar_link'),
        addToCart:()=>cy.get('[class="btn_primary btn_inventory"]').eq(0),
        remove:()=>cy.get('[class="btn_secondary btn_inventory"]').eq(0),   
        shoppingCart:()=> cy.get('[class="fa-layers-counter shopping_cart_badge"]'),
        acceptCookies:()=>cy.get('#onetrust-accept-btn-handler')
    }
}

export const BurgerMenu = new burgerMenu() 