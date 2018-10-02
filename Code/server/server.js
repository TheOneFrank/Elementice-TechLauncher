const express  = require("express");
const multer  = require("multer");
const request = require("request");
const app  = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, req.body.name + '-' + Date.now() + '.png');
    }
})
const upload = multer({storage: storage});

app.use(express.static('public'));

app.post('/upload', upload.single('image'), function(req,res){
    console.log('POST Request Received');
    res.sendStatus(200); // OK
});

app.get('/trigger', function(req,res){
    console.log('Trigger request recieved');
    res.sendStatus(200); // OK

    request.post({url: destination_ip + destination_port + '/trigger'}, function (err, res, body) {
        if (err) {return console.error('Trigger failed:', err);}
        console.log('Server: Camera triggered, server: ', body);
    });
});

const destination_ip = 'http://192.168.43.13'; // Master pi IP address
const destination_port = ':3000';

app.listen(3000,function(){
  console.log("Started on PORT 3000");
})