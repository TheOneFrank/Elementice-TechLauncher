const express  = require("express");
const multer  = require("multer");
const app  = express();
// const ws = require('express-ws')(app);

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

if (true){
    app.post('/trigger', function (req, res) {
        res.send('trigger');
    })
}


app.listen(3000,function(){
  console.log("Started on PORT 3000");
})