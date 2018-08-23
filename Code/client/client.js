const fs = require('file-system');
const request = require('request');

const destination_ip = 'http://192.168.0.100';
const destination_port = ':3000';

const formData = {
    name: 'watermelon',
    image: fs.createReadStream(__dirname + '/watermelon.png')
};

request.post({url: destination_ip + destination_port + '/upload', formData: formData}, function (err, res, body) {
    if (err) {return console.error('upload failed:', err);}

    console.log('Upload successful!  Server responded with:', body);
});