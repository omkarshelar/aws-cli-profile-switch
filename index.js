#!/usr/bin/env node

const { spawn } = require("child_process");
const { listCredentials } = require("./utils/credsParser");
const { chooseProfiles } = require("./utils/cli");
const { chooseProcess } = require("./utils/processChooser");
const chalk = require("chalk");

const profileNames = listCredentials();
chooseProfiles(profileNames).then((answer) => {
  const [cmd] = chooseProcess();
  createNewShell(cmd, [], answer.profileName);
});

const createNewShell = (cmd, args, profileName) => {
  const shell = spawn(cmd, args, {
    stdio: "inherit",
    env: { ...process.env, AWS_PROFILE: profileName },
  });

  const [, friendlyName] = chooseProcess();

  console.log(
    `Started New ${friendlyName} with PID ${shell.pid}
  Execute ${chalk.blue("'exit'")} command to return to previous shell.
  Using profile ${chalk.underline.green(profileName)}`
  );

  shell.on("close", (code) => {
    const [, friendlyName] = chooseProcess();
    console.log(`[${friendlyName}] terminated :`, code);
  });
};
