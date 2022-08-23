# AWS CLI profile switcher

**Easily switch profiles configured via AWS cli.**

CLI tool which allows you to switch between multiple AWS CLI profiles.
Use cli without `--profile <profile_name>` flag for every command. Your existing scripts work without profile settings!

NPM link : [https://www.npmjs.com/package/aws-cli-switch](https://www.npmjs.com/package/aws-cli-switch)

### Usage:
Run `npx aws-cli-switch` in your terminal. Ensure you have node installed.

Choose an existing profile :
<br>
![CLI Tool Image](imgs/cli-img-1.svg "CLI Tool Image")

New shell(sh/bash) in MacOS/Linux or PowerShell in Windows is launched with the chosen profile :
<br>
![CLI Tool Image](imgs/cli-img-2.svg "CLI Tool Image")

You can verify the current profile using the `aws configure list` command to verify the profile switch.
You can now use the AWS CLI as if the chosen profile was default.

---
