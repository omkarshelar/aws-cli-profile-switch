const path = require("path");
const fs = require("fs");
const { exit } = require("process");

const awsDir = path.resolve(
  process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE,
  ".aws"
);

const credentialsPath = path.resolve(awsDir, "credentials");

checkFile = () => {
  // Directory must exist
  if (!fs.existsSync(awsDir)) {
    throw new Error(`Given directory does not exist: [${awsDir}]`);
  }

  // Directory must contain a credentials file
  if (!fs.existsSync(credentialsPath)) {
    throw new Error(`No credentials file found in ${awsDir}`);
  }
};

const listCredentials = () => {
  try {
    checkFile();
  } catch (e) {
    console.log(e.message);
    exit();
  }

  let contents = fs.readFileSync(credentialsPath, {
    encoding: "utf-8",
  });
  contents = contents.replace(/\r/g, "").split("\n");
  profileNames = [];
  const profileNameMatcher = RegExp(/^\[(.+)\]$/, "g");
  for (let idx = 0; idx < contents.length; idx++) {
    const line = contents[idx];
    if (
      profileNameMatcher.test(line) &&
      contents[idx + 1] &&
      contents[idx + 1].includes("aws_access_key_id") &&
      contents[idx + 2] &&
      contents[idx + 2].includes("aws_secret_access_key")
    ) {
      profileNames.push(line.slice(1, line.length - 1));
    }
  }

  console.log("Profile Names:", profileNames);
  return profileNames;
};

exports.listCredentials = listCredentials;

// getCredentials = () => {
//   let contents = fs.readFileSync(credentialsPath, {
//     encoding: "utf-8",
//   });
//   console.log(JSON.stringify(contents));
//   contents = contents.replace(/\n/g, "");
//   console.log(JSON.stringify(contents));
//   console.log(contents.split("\r"));
// };
// getCredentials();
