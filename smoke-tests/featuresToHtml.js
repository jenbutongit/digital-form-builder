const gherkindoc = require("gherkindoc");

gherkindoc.generate("features/", "output/", [
  {
    theme: "solar", // The [bootswatch](http://bootswatch.com/) theme to use
    renderScenaria: true, // whether to render scenario bodies or only feature descriptions,
    steps: ["features/step-definitions/"], // A list of paths where the steps are stored
  },
]);
