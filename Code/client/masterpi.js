const express  = require("express");
const Gpio = require('onoff').Gpio;
const app  = express();
const trigger = new Gpio(203, 'out'); // Pin 7 out

// Needs sudo to run since pins are not exported
app.post('/trigger', function(req,res){
    console.log('Camera trigger received');

    trigger.writeSync(1);
    setTimeout(function() {
        trigger.writeSync(0);
    }, 100) // Send signal for 100ms
    res.sendStatus(200); // OK
});

process.on('SIGINT', () => {
    trigger.unexport();
  });

app.listen(3000,function(){
  console.log("Started on PORT 3000");
});