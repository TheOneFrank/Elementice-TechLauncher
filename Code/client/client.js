const fs = require('file-system');
const request = require('request');

const Gpio = require('onoff').Gpio;
const button = new Gpio(203, 'in', 'rising', {debounceTimeout: 10}); // Pin 7 in
const exec = require('child_process').execSync;

const destination_ip = 'http://192.168.1.228'; // Server IP address
const destination_port = ':3000';

// Needs fswebcam installed to work
// TODO Add npm dependencies

// Needs to run as root while gpio is not permitted
// Create upload folder if doens't exist

button.watch((err, value) => {
    if (err) {throw err;}

    console.log('Taking photo...');
    exec('fswebcam -r 1920x1080 --no-banner image1.jpg');

    const formData = {
        name: 'image1',
        image: fs.createReadStream(__dirname + '/image1.jpg')
    };
    
    request.post({url: destination_ip + destination_port + '/upload', formData: formData}, function (err, res, body) {
        if (err) {return console.error('upload failed:', err);}
    
        console.log('Upload successful!  Server responded with:', body);
    });
})

process.on('SIGINT', () => {
    button.unexport();
  });