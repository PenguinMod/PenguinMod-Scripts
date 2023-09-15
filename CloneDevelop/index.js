const fs = require('fs')
const devCompany = 'PenguinMod-Dev'
const repos = [
    'audio',
    'blocks',
    ['penguinmod-dev.github.io', 'scratch-gui'],
    'packager',
    'paint',
    'parser',
    'render',
    ['penguinmod-render-fonts', 'scratch-render-fonts'],
    'storage',
    'vm'
]
const fileExists = path => 
    new Promise(resolve => {
        fs.access(path, fs.constants.R_OK | fs.constants.W_OK | fs.constants.F_OK, err => {
            resolve(!err)
        });
    })

const ittr = async idx => {
    const repo = repos[idx]
    const source = Array.isArray(repo)
        ? `${devCompany}/${repo[0]}`
        : `${devCompany}/PenguinMod-${repo.toUpperCase()}`
    const dest = Array.isArray(repo)
        ? `../../${repo[1]}`
        : `../../scratch-${repo}`

    idx++
    const exists = await fileExists(dest)
    if (exists) {
        console.log('skiping', repo[0] ?? repo)
        return ittr(idx)
    }
    exec(`gh repo clone "${source}" "${dest}"`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`)
            return
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`)
            return
        }
        console.log(stdout)
        ittr(idx)
    })
}
ittr(0)