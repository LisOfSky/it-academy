const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1280,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push("--incognito");
          return launchOptions
        }

        if (browser.name === 'electron') {
          launchOptions.preferences.incognito = true
          return launchOptions
        }
      })
    },
  },
});
