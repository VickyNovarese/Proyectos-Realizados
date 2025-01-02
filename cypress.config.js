const { defineConfig } = require('cypress');
module.exports = defineConfig ({
  reporter: 'cypress-mochawesome-reporter',
  watchForFileChanges: false,
  screenshotOnRunFailure: true,
  reporterOptions: {
    charts: true,
    reportDir: 'cypress/results',
    reportPageTitle: 'Reportes de Tests',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      // Aquí puedes implementar los listeners de eventos si los necesitas
    },
    baseUrl: 'https://www.google.com', // Asegúrate de usar el prefijo 'https://'
  },
});

