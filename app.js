
const spawn = require('child_process').spawn;
const which = require('which');

downloadAsync()
    .then(() => { console.log('download successfull') })
    .catch((error) => { console.log('download with error:' + error) });

function downloadAsync() {
    return new Promise((resolve, reject) => {
        const spa = spawn('./image-downloader.sh', ['mysql', 'mysql:latest']);
        return spa;
        spa.stdout.on('data', (data) => {
            console.log(`downloading ...`);
        });


        spa.stderr.on('data', (error) => {
            reject(error);
        });

        spa.on('close', (code) => {
            if (code == 0) resolve(code);
            else reject(code);
        });
    })
}
