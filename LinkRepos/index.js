const fs = require('fs')
const {exec} = require("child_process");
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
    if (await fileExists(path.join(conf[entry], 'node_modules'))) {
        console.log(`removing old node_modules from ${entry}... please wait`)
        fs.rmSync(path.join(conf[entry], 'node_modules'), {
            recursive: true
        })
    }
    console.log(`intalling dependencies for ${entry}... please wait`)
    exec('npm i --force', {cwd: conf[entry]}, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`)
            return
        }
        // ignore wranings
        if (stderr && !stderr.startsWith('npm WARN')) {
            console.log(`stderr: ${stderr}`)
            return
        }
        console.log('dependencies installed.')
        const packagePath = path.join(conf[entry], 'package.json')
        const packJson = require(packagePath)
        const dependencies = Object.values(Object.assign({}, packJson.dependencies, packJson.devDependencies))
            .filter(package => package.startsWith('github:PenguinMod') || package.startsWith('git+https://github.com/PenguinMod'))
            .map(package => {
                const match = package.match(pmLink)
                const name = match[3].toLowerCase()
                return [name, conf[name]]
            })
        
        for (const dep of dependencies) {
            const [name, src] = dep
            console.log('linking', name)
            const dest = path.join(conf[entry], 'node_modules', `scratch-${name}`)
            fs.rmSync(dest, {
                recursive: true
            })
            fs.symlinkSync(src, dest)
            if (!handled[name]) ittr(name)
        }
        handled[entry] = true
    })
}

console.log('starting installers...')
for (const name of conf.entryPoints) {
    ittr(name)
}
console.log('finnished starting installers...')