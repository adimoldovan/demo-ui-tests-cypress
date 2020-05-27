/// <reference types="cypress" />

describe('Checkout spec', () => {
    it('Guest can add a product to cart', () => {
        cy.visit('')

        cy.get("div.card button.btn-link").first().click()

        cy.get("span.shopping_cart_badge").should('have.text', '1')
    })
})