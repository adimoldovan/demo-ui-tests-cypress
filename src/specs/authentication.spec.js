/// <reference types="cypress" />



describe('Authentication spec', () => {
    it('I can login', () => {
        cy.visit('')

        cy.get("span > button.btn-link").click()

        cy.get("#user-name")
            .type('dino')
            .should('have.value', 'dino')
        cy.get("#password")
            .type('choochoo')
            .should('have.value', 'choochoo')
        cy.get("button.btn-primary").click()
        cy.get("a[href='#/account']").should('have.text', 'dino')
    })
})