const fs = require('file-system');
const request = require('request');

const Gpio = require('onoff').Gpio;
const button = new Gpio(203, 'in', 'rising', {debounceTimeout: 10}); // Pin 7 in
const exec = require('child_process').execSync; // Needed to halt process
const spawn = require('child_process').spawn;   // Needed to run in background

options = {
    cwd: '/home/pi/mjpg-streamer',
    shell: true,
    detached: true}

child = spawn('sh start.sh', options); // Start streaming
child.on('error', function (err) {
    console.log(err);
})
console.log("Streaming Started, PID: " + child.pid);

const destination_ip = 'http://192.168.0.100'; // Server IP Address
const destination_port = ':3000';

const IMAGE_NAME = 'image1';
button.watch((err, value) => {
    if (err) {throw err;}

    process.kill(-child.pid, 'SIGTERM'); // Stop streaming

    console.log('Taking photo...');
    exec('fswebcam -r 1920x1080 --no-banner ' + IMAGE_NAME +'.jpg');

    const formData = {
        name: IMAGE_NAME,
        image: fs.createReadStream(__dirname + '/' + IMAGE_NAME +'.jpg')
    };
    request.post({url: destination_ip + destination_port + '/upload', formData: formData}, function (err, res, body) {
        if (err) {return console.error('Upload failed:', err);}
        console.log('Upload successful!  Server responded with:', body);
    });

    child = spawn('sh start.sh', options); // Restart streaming
})
process.on('SIGINT', () => {
    button.unexport();
    process.kill(-child.pid, 'SIGTERM'); // Stop streaming
    process.exit(0);
  });