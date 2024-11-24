module.exports = {
  watchForFileChanges: false,
  e2e: {
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
      // Aquí puedes implementar los listeners de eventos si los necesitas
    },
    baseUrl: 'https://www.google.com', // Asegúrate de usar el prefijo 'https://'
  },
};

