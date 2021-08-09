export function authYousign (username, password) {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
}
