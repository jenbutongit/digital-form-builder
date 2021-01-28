import pkg from "../../package.json";
import config from "../config";
import { newConfig, api } from "./routes";

export const designerPlugin = {
  plugin: {
    name: pkg.name,
    version: pkg.version,
    multiple: true,
    dependencies: "vision",
    register: async (server) => {
      server.route({
        method: "get",
        path: "/",
        options: {
          handler: async (_request, h) => {
            return h.redirect("/app");
          },
        },
      });

      server.route({
        method: "get",
        path: "/app",
        options: {
          handler: async (request, h) => {
            return h.view("designer", {
              phase: config.phase,
              previewUrl: config.previewUrl,
              footerText: config.footerText,
            });
          },
        },
      });

      server.route({
        method: "GET",
        path: "/feature-toggles",
        options: {
          handler: async (request, h) => {
            let environmentVariables = process.env;

            Object.keys(process.env).forEach(function (key) {
              if (key.substring(0, 2) != "ff") {
                delete environmentVariables[key];
              }
            });

            return h.response(JSON.stringify(environmentVariables)).code(200);
          },
        },
      });

      server.route(newConfig.registerNewFormWithRunner);
      server.route(api.getFormWithId);
      server.route(api.putFormWithId);
      server.route(api.getAllPersistedConfigurations);
    },
  },
};
