const environment = require("./support/environments");
const ENV = process.env.ENV;

if (!ENV || !["dev", "test"].includes(ENV)) {
  console.log(
    "Please use the following format when running tests: ENV=dev|test"
  );
  process.exit();
}

exports.config = {
  runner: "local",
  specs: ["./features/**/*.feature"],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      //
      browserName: "chrome",
      "goog:chromeOptions": {
        args: [
          "--headless",
          "--disable-gpu",
          "--window-size=1280x1024",
          "--disable-dev-shm-usage",
        ],
      },
      acceptInsecureCerts: true,
    },
  ],

  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "info",

  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  baseUrl: environment[process.env.ENV],
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 5000,
  //
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 120000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  services: ["selenium-standalone"],
  framework: "cucumber",
  reporters: [
    "spec",
    [
      "junit",
      {
        outputDir: "./reports/ci/",
        outputFileFormat: function (options) {
          return 'smoke-test-results.xml';
        },
      },
    ],
  ],

  cucumberOpts: {
    require: ["./features/step-definitions/steps.js"],
    backtrace: false,
    requireModule: ["@babel/register"],
    dryRun: false,
    failFast: false,
    format: ["pretty"],
    snippets: false,
    source: true,
    profile: [],
    strict: false,
    tagExpression: "",
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },

  // =====
  // Hooks
  // =====

  beforeFeature: function () {
    browser.maximizeWindow();
  },

  afterScenario: function (uri, feature, scenario, result, sourceLocation) {
    const path = require("path");
    const moment = require("moment");
    // if test passed, ignore, else take and save screenshot.
    if (result.status === "passed") {
      return;
    } else {
      const timestamp = moment().format("DDMMYYYY-HHmmss.SSS");
      const filepath = path.join(
        "reports/screenshots/",
        timestamp + ".png"
      );
      browser.saveScreenshot(filepath);
      process.emit("test:screenshot", filepath);
    }
  },
};
