import {authYousign} from '../../actions/auth'
const randomName = () => Cypress._.random(0, 1e6);
const id = randomName();
const testname = `testname${id}`;

  Given ('User is logged into the Yousign', (datatable) => {
    datatable.hashes().forEach(element => {
    cy.visit("https://staging-app.yousign.com/")
    // using the js script instead of custom commands
    authYousign(element.username, element.password)
    cy.get('button[name="action"]').click();
    cy.wait(2000)
    cy.url().should('include', 'https://staging-app.yousign.com/procedures?status=to_sign')
    cy.title().should("include", "Yousign App")
  })
  })
  When ('User clicks on the add contact button', () => {
    cy.get('a[href*="/admin"]').click()
    cy.get('[ui-sref="admin.contacts"]').click()
    cy.wait(1000)
    cy.get("#js-bar-actions-item__button-large").click()
    cy.get(".c-ui-title__label").should("be.visible")
  })
  And('Puts the personal data into the needed fields', (datatable) => {
    datatable.hashes().forEach(element => {
    cy.get("#js-user-add_modal-firstname").type(testname)
    cy.get("#js-user-add_modal-lastname").type(testname)
    cy.get("#js-user-add_modal-email").type(testname + "@gmail.com")
    cy.get(".iti__selected-flag").click()
    cy.get(".iti__country-list").should("be.visible")
    cy.get("#iti-1__item-fr").click()
    cy.get(".iti").type(element.phone).contains("+33")
    cy.get('.c-ui-input').eq(5).type("Tester")
    cy.get('.c-ui-input').eq(6).type("Yousign")
})
})
  And('Submits the contact creation', () => {
    cy.get('.c-ui-panel__footer__button').click()
  })
  Then ('The new contact is added', () => {
    cy.get('.c-ui-tpl-list__items').contains(testname)
    cy.get('.toast-close-button').click()
    cy.get('.c-ui-avatar__background').first().click()
    cy.get('a').eq(1).click();
});