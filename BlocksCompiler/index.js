const childProcess = require("child_process");
const fs = require("fs");
const path = require("path");

const config = require("./config.json");

if (!config.gui_blocks_path) {
    throw new Error(`Define "gui_blocks_path" in the config.json file. Use the full path, not a relative path.`);
}
if (!config.vm_blocks_path) {
    throw new Error(`Define "vm_blocks_path" in the config.json file. Use the full path, not a relative path.`);
}
if (!config.real_blocks_path) {
    throw new Error(`Define "real_blocks_path" in the config.json file. Use the full path, not a relative path.`);
}
if (!config.gui_blocks_media_path) {
    throw new Error(`Define "gui_blocks_media_path" in the config.json file. Use the full path, not a relative path.`);
}
if (!config.vm_blocks_media_path) {
    throw new Error(`Define "vm_blocks_media_path" in the config.json file. Use the full path, not a relative path.`);
}

const getTemplateKey = (name) => {
    return `{{{{!!__TEMPLATE_${name}__!!}}}}`;
};
const getAllTemplateKeys = (data) => {
    const keys = String(data).match(/(?<={{{{!!__TEMPLATE_)[^\.]+/gm).map(match => {
        return String(match) + '.js';
    });
    return keys;
};

const escapeText = (text) => {
    const stringified = JSON.stringify(String(text));
    return stringified.substring(1, stringified.length - 1);
};

// no error checking because wtf would we do if an error happened, replace the files anyways?
const template = fs.readFileSync("./template.js", "utf8");

const handleAfterCompilation = () => {
    let finalizedVertical = template;
    const keys = getAllTemplateKeys(finalizedVertical);
    const allReadingPaths = keys.map(key => ({
        path: path.join(config.real_blocks_path, key),
        key: key
    }));

    console.log("replacing template");
    for (const readingPath of allReadingPaths) {
        console.log("reading", readingPath.key);
        const compiled = escapeText(fs.readFileSync(readingPath.path, "utf8"));
        finalizedVertical = finalizedVertical.replace(getTemplateKey(readingPath.key), compiled);
        console.log("replaced", getTemplateKey(readingPath.key), "in the compilation");
    }

    // for the user to see ig
    fs.writeFileSync(
        "./_last_compilation.js",
        '/* Generated by penguinmod-blocks-updater. Editing this file will do nothing. */'
        + '/* This is purely for viewing the generated output. */'
        + `\n/* ${JSON.stringify(allReadingPaths, null, 4).replaceAll("*/", "*-/")} */`
        + finalizedVertical,
        "utf8"
    );
    // return;

    console.log("replacing packages");
    console.log("replacing dist folder");

    const guiPath = {
        nor: path.join(config.gui_blocks_path, "/dist/vertical.js"),
        web: path.join(config.gui_blocks_path, "/dist/web/vertical.js")
    };
    const vmPath = {
        nor: path.join(config.vm_blocks_path, "/dist/vertical.js"),
        web: path.join(config.vm_blocks_path, "/dist/web/vertical.js")
    };

    const paths = [guiPath, vmPath];

    console.log(paths, "replacing these paths with new package");

    for (const path of paths) {
        fs.writeFileSync(path.nor, finalizedVertical);
        fs.writeFileSync(path.web, finalizedVertical);
    }

    console.log("replaced dist folder");

    console.log("replacing media folder...");
    const source = path.join(config.real_blocks_path, "/media");

    fs.rmSync(config.gui_blocks_media_path, { recursive: true, force: true });
    fs.rmSync(config.vm_blocks_media_path, { recursive: true, force: true });

    fs.cpSync(source, config.gui_blocks_media_path, {
        errorOnExist: false,
        force: true,
        recursive: true
    });
    fs.cpSync(source, config.vm_blocks_media_path, {
        errorOnExist: false,
        force: true,
        recursive: true
    });

    console.log("replaced media folder");
    console.log("operations completed, gg");
};

if (config.shouldRecompile) {
    console.log("Recompiling, please wait...");
    const enterPath = JSON.stringify(`${config.real_blocks_path}`);

    // enter the path & then run the npm command that builds the files (may take a while)
    childProcess.exec(`cd ${enterPath} && npm run prepublish`, (err, stdout, stderr) => {
        if (err) {
            throw new Error(err);
        }
        if (stderr) {
            // these dont seem to be fatal
            console.error("stderr:", stderr);
        }

        console.log("stdout:", stdout);

        // compilation is now finished so we can use fs to read files from that dir now
        handleAfterCompilation();
    });
} else {
    // we just assume that we are already compiled
    console.log('skipping compilation...');
    handleAfterCompilation();
}