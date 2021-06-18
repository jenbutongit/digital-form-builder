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
      "/assets/images/govuk-crest-2x.png",
      "/assets/all.js",
    ],
    formatters: {
      level: (label) => {
        return { level: label };
      },
    },
  },
};
