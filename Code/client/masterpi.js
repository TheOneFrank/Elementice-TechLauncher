const express  = require("express");
const app  = express();

const Gpio = require('onoff').Gpio;
const trigger = new Gpio(203, 'out'); // Pin 7 out

app.post('/trigger', function(req,res){
    console.log('Camera trigger received');

    trigger.writeSync(1);
    setTimeout(function() {
        trigger.writeSync(0);
        trigger.unexport();
    }), 100 // Send signal for 100ms
    res.sendStatus(200); // OK
});

app.listen(3000,function(){
  console.log("Started on PORT 3000");
});