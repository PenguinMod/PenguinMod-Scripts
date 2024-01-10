const childProcess = require("child_process");
const path = require("path");
const fs = require("fs");

const config = require("./config.json");

if (!config.main_path) {
    throw new Error(`Define "main_path" in the config.json file. Use the full path, not a relative path.`);
}
if (!config.folders) {
    throw new Error(`Define "folders" in the config.json file. This is an array of folder names inside the main path.`);
}

if (config.remove_packagelock) {
    for (const folder of config.folders) {
        const packageLock = path.join(config.main_path, folder, 'package-lock.json');
        if (fs.existsSync(packageLock)) {
            console.log('Removing', packageLock);
            fs.unlinkSync(packageLock);
        }
    }
}
for (const folder of config.folders) {
    const folderPath = path.join(config.main_path, folder);
    console.log('Installing modules for', folder);
    childProcess.exec(`cd ${folderPath} && npm install --force`, (err, stdout, stderr) => {
        if (err) {
            console.error("err:", err);
        }
        if (stderr) {
            // these dont seem to be fatal
            console.error("stderr:", stderr);
        }

        console.log("stdout:", stdout);
    });
}