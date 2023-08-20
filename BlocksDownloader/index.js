const { exec } = require("child_process")
const fs = require("fs")
const path = require("path")

const config = require("./config.json")

if (!config.gui_blocks_path) {
    throw new Error(`Define "gui_blocks_path" in the config.json file. Use the full path, not a relative path.`)
}
if (!config.vm_blocks_path) {
    throw new Error(`Define "vm_blocks_path" in the config.json file. Use the full path, not a relative path.`)
}

const package = "git+https://github.com/PenguinMod/PenguinMod-Blocks.git#develop-builds"

exec(`npm install ${package}`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`)
        return
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`)
        return
    }
    console.log(stdout)
    console.log("replacing packages")

    const vert = fs.readFileSync(`./node_modules/scratch-blocks/dist/vertical.js`)
    const web = fs.readFileSync(`./node_modules/scratch-blocks/dist/web/vertical.js`)

    const guiPath = {
        nor: path.join(config.gui_blocks_path, "/dist/vertical.js"),
        web: path.join(config.gui_blocks_path, "/dist/web/vertical.js")
    }
    const vmPath = {
        nor: path.join(config.vm_blocks_path, "/dist/vertical.js"),
        web: path.join(config.vm_blocks_path, "/dist/web/vertical.js")
    }

    const paths = [guiPath, vmPath]

    console.log(paths, "replacing these paths with new package")

    paths.forEach(path => {
        fs.writeFileSync(path.nor, vert)
        fs.writeFileSync(path.web, web)
    })
})