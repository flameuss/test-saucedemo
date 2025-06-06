const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // Mochawesome
      require('cypress-mochawesome-reporter/plugin')(on);
      // Cucumber
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
    // Ativa a gravação de vídeo
    video: true,
    // Configuração do Cucumber
    specPattern: [
      "cypress/e2e/**/*.feature",
      "cypress/e2e/**/*.cy.{js,ts,jsx,tsx}"
    ],
    stepDefinitions: 'cypress/e2e/**/',
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'mochawesome-report',
      overwrite: false,
      html: true,
      json: true
    }
  },
});
