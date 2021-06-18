import config from "../config";
import pino from "hapi-pino";

export default {
  plugin: pino,
  options: {
    prettyPrint: config.isDev,
    level: "trace",
    ignorePaths: [
      "/assets",
      "/assets/images/favicon.ico",
      "/assets/fonts/light-94a07e06a1-v2.woff2",
      "/assets/fonts/bold-affa96571d-v2.woff",
      "/assets/fonts/light-f591b13f7d-v2.woff",
      "/assets/images/govuk-crest-2x.png",
      "/assets/all.js",
      "/assets/upload-dialog.js",
      "/assets/jquery-3.5.1.min.js",
      "/assets/accessible-autocomplete.min.js.map",
      "/assets/accessible-autocomplete.min.js",
      "/assets/stylesheets/application.css",
      "/assets/dialog-polyfill.0.4.3.js",
      "/assets/govuk-template.js",
      "/assets/modal-dialog.js",
      "/assets/upload-dialog.js",
      "/assets/fonts/bold-b542beb274-v2.woff2",
    ],
    formatters: {
      level: (label) => {
        return { level: label };
      },
    },
  },
};
