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
// TODO Create upload folder if it doesn't exist

app.use(express.static('public'));

let TOTAL_IMAGES = 0;
app.post('/upload', upload.single('image'), function(req,res){
    console.log('POST Request Received');
    res.sendStatus(200); // OK
    TOTAL_IMAGES++;
    if (TOTAL_IMAGES == 15) { // Dodgy
        stitchImages();
    }
});

function stitchImages() {
    // stitch and animate images
}

const destination_ip = 'http://192.168.0.113'; // Master pi IP address
const destination_port = ':3000';

app.get('/trigger', function(req,res){
    console.log('Trigger request recieved by master pi');
    res.sendStatus(200); // OK

    request.post({url: destination_ip + destination_port + '/trigger'}, function (err, res, body) {
        if (err) {return console.error('Trigger failed:', err);}
        console.log('Server: Camera triggered: ', body);
    });
});

app.listen(3000,function(){
  console.log("Started on PORT 3000");
})