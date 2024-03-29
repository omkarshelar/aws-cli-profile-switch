const os = require("os");

chooseProcess = () => {
  if (os.type() === "Windows_NT") {
    return ["powershell.exe", "PowerShell"];
  } else if (os.type() === "Linux" || os.type() === "Darwin") {
    // const process = "sh && " + String.raw`PS1=[\u@h W](${profileName})$`;
    return ["bash", "bash"];
  } else {
    throw new Error("Can't identify OS.");
  }
};

exports.chooseProcess = chooseProcess;
