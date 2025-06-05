class LoginPage {
  visit() {
    cy.visit(Cypress.env('login_url'));
  }

  fillUsername(username) {
    cy.get('[data-test="username"]').clear().type(username);
  }

  fillPassword(password) {
    cy.get('[data-test="password"]').clear().type(password);
  }

  submit() {
    cy.get('#login-button').click();
  }

  shouldSeeProducts() {
    cy.get('.product_label').contains('Products');
  }

  shouldSeeError() {
    cy.get('[data-test="error"]').should('be.visible');
    cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service');
  }
}

export default new LoginPage();
