import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from './login.page';

Given('que estou na página de login', () => {
  LoginPage.visit();
});

When('preencho o usuário com {string} e a senha com {string}', (usuario, senha) => {
  LoginPage.fillUsername(usuario);
  LoginPage.fillPassword(senha);
});

When('clico no botão de login', () => {
  LoginPage.submit();
});

Then('devo ver a página de produtos', () => {
  LoginPage.shouldSeeProducts();
});

Then('devo ver a mensagem de erro', () => {
  LoginPage.shouldSeeError();
});
