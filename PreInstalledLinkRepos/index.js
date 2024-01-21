const fs = require('fs')
const { exec } = require("child_process");
const path = require('path')
const conf = require('./config.json')
const pmLink = /^(github:PenguinMod|git\+https:\/\/github\.com\/PenguinMod)(-Dev)?\/PenguinMod-([\w-]+)(.git)?#[\w-]+$/i
const fileExists = path =>
    new Promise(resolve => {
        fs.access(path, fs.constants.R_OK | fs.constants.W_OK | fs.constants.F_OK, err => {
            resolve(!err)
        });
    })
const handled = {}

const ittr = async entry => {
    const packagePath = path.join(conf[entry], 'package.json')
    const packJson = require(packagePath)
    const dependencies = Object.entries(Object.assign({}, packJson.dependencies, packJson.devDependencies))
        .filter(package => package[1].startsWith('github:PenguinMod') || package[1].startsWith('git+https://github.com/PenguinMod'))
        .map(package => {
            const match = package[1].match(pmLink)
            const name = match[3].toLowerCase()
            return [name, conf[name], package[0]]
        })
        .filter(([_, path]) => path)

    for (const dep of dependencies) {
        const [name, src, module] = dep
        if (name === 'blocks') continue;
        console.log('linking', name, 'to', entry)
        const dest = path.join(conf[entry], 'node_modules', module)
        if (name === 'render-fonts') {
            console.log(src, dest);
        }
        fs.rmSync(dest, {
            recursive: true
        })
        fs.symlinkSync(src, dest)
        if (!handled[name]) ittr(name)
    }
    handled[entry] = true
}

console.log('starting link...')
for (const name of conf.entryPoints) {
    ittr(name)
}
console.log('finnished link...')