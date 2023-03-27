const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: true,
    reporter: "mochawesome",
    projectId: "i3ct1d",
    video: false,
    reporterOptions : {
      charts: true,
      overwrite: false,
      html: false,
      json: true,
      reportDir: "cypress/reports/mochawesome-report",
      reportPageTitle :"Project Frame Report",
      embeddedScreenshots: true,
    },
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
    },
    
  },
})
  
