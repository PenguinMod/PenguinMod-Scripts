const childProcess = require('child_process');
const axios = require('axios');

// im aware node has a built in wait function, i dont know the name of the module so too bad cry about it
const wait = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

const func = async () => {
    console.log('Running periodic check...');
    let response;
    let worked = true;
    try {
        response = await axios.get('https://projects.penguinmod.com/api');
    } catch {
        worked = false;
    }
    if (worked) {
        worked = !(response.status < 200 || response.status >= 300);
    }
    if (!worked) {
        console.log('API failed to respond properly, restarting');
        try {
            childProcess.execSync('sudo systemctl restart penguinmod-api');
            await wait(3000); // systemctl wants some delay for some reason, so we give it that
            childProcess.execSync('sudo systemctl restart cloudflared');
            console.log('API should be restarted!');
        } catch (err) {
            console.error('Failed to restart API and Cloudflared!', err);
        }
    }
};
setInterval(func, 60000);
func();