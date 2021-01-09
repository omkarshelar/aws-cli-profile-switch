const inquirer = require("inquirer");

const chooseProfiles = (profileNames) => {
  return inquirer.prompt([
    {
      type: "list",
      name: "profileName",
      message: "Choose AWS profile name",
      choices: profileNames,
    },
  ]);
};

exports.chooseProfiles = chooseProfiles;
