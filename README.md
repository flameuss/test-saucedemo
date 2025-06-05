# Automação de Testes com Cypress, Cucumber e Mochawesome

## Visão Geral
Este projeto implementa automação de testes end-to-end para o fluxo de login do site [SauceDemo](https://www.saucedemo.com/v1/index.html), utilizando as melhores práticas recomendadas pela documentação oficial do Cypress.

O framework foi estruturado para garantir manutenibilidade, escalabilidade e clareza, empregando Page Object Model (POM), variáveis de ambiente, integração contínua (CI), comandos customizados e geração de relatórios avançados.

---

## Estrutura do Projeto

```
cypress/
  e2e/
    Login/
      login.feature         # Cenários BDD em Gherkin
      login.cy.js           # Step definitions integrados ao POM
      login.page.js         # Page Object Model para tela de login
      testes_login.cy.js    # Testes tradicionais Cypress
  support/
    commands.js            # Comandos customizados (ex: login)
    e2e.js                 # Suporte global e registro de plugins
cypress.env.json           # Variáveis de ambiente (ex: URLs)
cypress.config.js          # Configuração principal do Cypress
mochawesome-report/        # Relatórios HTML e JSON dos testes
```

---

## Boas Práticas Adotadas

- **Page Object Model (POM):**
  - Centraliza ações e seletores da página em uma classe (`login.page.js`), promovendo reuso e fácil manutenção.
- **Separação de responsabilidades:**
  - Steps do Cucumber (`login.cy.js`) apenas descrevem o fluxo, delegando ações ao POM.
- **Comandos customizados:**
  - O arquivo `commands.js` implementa o comando `cy.login(username, password)`, centralizando o fluxo de login para reutilização em múltiplos testes.
- **Variáveis de ambiente:**
  - URLs e dados sensíveis são mantidos em `cypress.env.json`, evitando hardcode e facilitando mudanças de ambiente.
- **BDD com Cucumber:**
  - Cenários escritos em Gherkin (`login.feature`), facilitando entendimento por todos os stakeholders.
- **Relatórios avançados:**
  - Mochawesome gera relatórios detalhados em HTML e JSON, facilitando análise de execuções. O pipeline faz merge dos arquivos JSON e gera um relatório HTML consolidado.
- **Plugins e suporte:**
  - Plugins são registrados no arquivo de suporte (`e2e.js`) e configurados no `cypress.config.js`.
- **CI/CD:**
  - Pipeline GitHub Actions executa os testes, faz merge dos relatórios e faz upload dos artefatos (vídeos e relatórios).
- **Organização de pastas:**
  - Estrutura clara e alinhada ao padrão Cypress, facilitando escalabilidade.
- **Limpeza e clareza:**
  - Imports e comandos desnecessários removidos, código limpo e comentado quando necessário.

---

## Plugins e Frameworks Utilizados

- **Cypress**: Framework principal de automação E2E.
- **@badeball/cypress-cucumber-preprocessor**: Suporte a BDD/Cucumber.
- **cypress-mochawesome-reporter**: Geração de relatórios avançados.
- **mochawesome, mochawesome-merge, mochawesome-report-generator**: Suporte ao reporter e geração de relatórios customizados.
- **@bahmutov/cypress-esbuild-preprocessor**: Necessário para integração do Cucumber com Cypress.

---

## Testes Realizados

### login.feature
```gherkin
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
```

### login.cy.js (Step Definitions)
- Utiliza o POM para executar as ações descritas nos cenários.
- Mantém o código limpo, reutilizável e fácil de manter.

### login.page.js (Page Object Model)
- Métodos para visitar a página, preencher campos, submeter o formulário e validar resultados.
- Todos os seletores centralizados, facilitando manutenção.

### commands.js (Comando Customizado)
- Comando `cy.login(username, password)` para centralizar e reutilizar o fluxo de login em diferentes testes.

---

## Como Executar

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Execute os testes:
   ```sh
   npx cypress run --browser chrome
   ```
   Ou para rodar apenas o feature:
   ```sh
   npx cypress run --spec "cypress/e2e/Login/login.feature"
   ```
3. Relatórios serão gerados em `mochawesome-report/` e vídeos em `cypress/videos/`.
   - Para gerar o relatório HTML consolidado manualmente:
     ```sh
     npx mochawesome-merge mochawesome-report/.jsons/*.json > mochawesome-report/mochawesome.json
     npx marge mochawesome-report/mochawesome.json -f report -o mochawesome-report
     ```

---

## Integração Contínua (CI)
- Pipeline GitHub Actions executa os testes a cada push/pull request.
- Mescla os relatórios JSON do Mochawesome e gera um relatório HTML consolidado.
- Artefatos de vídeo e relatórios são disponibilizados automaticamente.

---

## Considerações Finais
- O projeto segue as recomendações oficiais do Cypress para estrutura, plugins e boas práticas.
- O uso de POM, comandos customizados, variáveis de ambiente e BDD garante fácil manutenção, clareza e escalabilidade.
- Relatórios e vídeos facilitam análise e rastreabilidade dos testes.

---

**Analista de Testes:**
Este projeto foi desenvolvido com foco em qualidade, clareza e alinhamento às melhores práticas de automação de testes modernas. Qualquer dúvida ou sugestão, fique à vontade para contribuir!
