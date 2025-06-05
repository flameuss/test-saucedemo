Feature: Login
  Scenario: Login com usuário válido
    Given que estou na página de login
    When preencho o usuário com "standard_user" e a senha com "secret_sauce"
    And clico no botão de login
    Then devo ver a página de produtos

  Scenario: Login com usuário inválido
    Given que estou na página de login
    When preencho o usuário com "standard_luis" e a senha com "secret_sauce"
    And clico no botão de login
    Then devo ver a mensagem de erro
