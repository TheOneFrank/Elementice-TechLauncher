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

app.post('/upload', upload.single('image'), function(req,res){
    console.log('POST Request Received');
    res.sendStatus(200); // OK
});

const destination_ip = 'http://192.168.0.109';
const destination_port = ':3000';
if (true){
    request.post({url: destination_ip + destination_port + '/trigger'}, function (err, res, body) {
        if (err) {return console.error('Trigger failed:', err);}
        console.log('Camera triggered, server: ', body);
    });
}

app.listen(3000,function(){
  console.log("Started on PORT 3000");
})