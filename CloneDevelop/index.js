const fs = require('fs')
const conf = require('./config.json')
const {exec} = require("child_process");
const repos = conf.repos
const devCompany = conf.src
const fileExists = path => 
    new Promise(resolve => {
        fs.access(path, fs.constants.R_OK | fs.constants.W_OK | fs.constants.F_OK, err => {
            resolve(!err)
        });
    })

const ittr = async idx => {
    const repo = repos[idx]
    if (!repo) return
    const repoData = conf[repo]
    const dest = repoData.path
    const source = `${devCompany}/${repoData.repo}`

    idx++
    const exists = await fileExists(dest)
    if (exists) {
        console.log('skiping', repo)
        return ittr(idx)
    }
    exec(`gh repo clone "${source}" "${dest}"`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`)
            return
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`)
        }
        console.log(stdout)
        ittr(idx)
    })
}
ittr(0)