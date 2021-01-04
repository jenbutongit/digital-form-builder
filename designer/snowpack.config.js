/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    snowpack: { url: "/", static: true },
    client: { url: "/dist" },
  },
  plugins: [
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-babel",
    /*[
      "@snowpack/plugin-sass",
      {
        compilerOptions: {
          loadPath: ["node_modules"],
          includePaths: ["node_modules"],
        },
      },
    ],
    "snowpack-plugin-sass",*/
    [
      "snowpack-plugin-sass-compiler",
      {
        outputPath: "main.css",
        targetDirectory: ["client"],
        scssOptions: {
          outputStyle: "compressed",
          includePaths: ["node_modules"],
          sourceMap: false,
        },
      },
    ],
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
    "@govuk-jsx": "@xgovformbuilder/govuk-react-jsx",
  },
  exclude: ["_*.scss", "_*.sass"],
};
