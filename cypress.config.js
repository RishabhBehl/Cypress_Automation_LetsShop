const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false, //add comment
    specPattern: [
    "cypress/E2E/Tests/User_Login.js",
    "cypress/E2E/Tests/User_OrderProduct.js",
    // "cypress/E2E/Tests/User_Registration.js"
    
    ],
    },
});
