describe('Testes de Login ', () => {
  beforeEach(() => {
    
    cy.visit("https://www.saucedemo.com/v1/index.html");
  })

  it('CT01 - Realizar a tentativa de login usando um usuário e senha validos', () => {
    
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get("#login-button").click();
    cy.get(".product_label").contains('Products');

  })

  it("CT02 - Realizar a tentativa de login usando um usuário e senha invalidos", () => {
    cy.get('[data-test="username"]').type("standard_luis");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').should('be.visible');
    cy.get('[data-test="error"]').contains("Epic sadface: Username and password do not match any user in this service");
  });
})