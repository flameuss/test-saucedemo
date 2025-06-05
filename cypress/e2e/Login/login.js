// Step definitions para o Cucumber
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que estou na página de login', () => {
  cy.visit('https://www.saucedemo.com/v1/index.html');
});

When('preencho o usuário com {string} e a senha com {string}', (usuario, senha) => {
  cy.get('[data-test="username"]').type(usuario);
  cy.get('[data-test="password"]').type(senha);
});

When('clico no botão de login', () => {
  cy.get('#login-button').click();
});

Then('devo ver a página de produtos', () => {
  cy.get('.product_label').contains('Products');
});

Then('devo ver a mensagem de erro', () => {
  cy.get('[data-test="error"]').should('be.visible');
  cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service');
});