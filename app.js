
const spawn = require('child_process').spawn;
const which = require('which');

const spa = spawn('./image-downloader.sh', ['mysql', 'mysql:latest']);

spa.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});


spa.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

spa.on('end', (code) => {
    console.log(`child process ended with code ${code}`);
});

spa.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
