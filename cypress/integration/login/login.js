import {authYousign} from '../../actions/auth'

Given('Yousign log-in page is opened', () => {
        cy.visit("https://staging-app.yousign.com/")
    })
     
    When('User puts its credentials into the username and password fields', (datatable)=>{
        datatable.hashes().forEach(element => {
        authYousign(element.username, element.password)
    })
    })
    And('User clicks on login button', ()=>{
        cy.get('button[name="action"]').click()
    })
    Then('User is connected', ()=>{
        cy.url().should('eq', 'https://staging-app.yousign.com/procedures?status=to_sign')
        cy.title().should("include", "Yousign App");
        cy.get('.c-ui-avatar__background').first().click()
        cy.get('a').eq(1).click();
     }); 