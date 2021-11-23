const promptDirectory = require("inquirer-directory");
const { join } = require("path");
const basePath = "./src";
module.exports = (plop) => {
  plop.setPrompt("directory", promptDirectory);
  plop.setGenerator("component", {
    description: "function component with style",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name",
      },
      {
        type: "directory",
        name: "directory",
        message: "component folder",
        basePath,
      },
    ],
    actions: [
      {
        type: "addMany",
        templateFiles: "templates/*.hbs",
        destination: join(basePath, "/{{directory}}/{{name}}/"),
      },
    ],
  });
};
