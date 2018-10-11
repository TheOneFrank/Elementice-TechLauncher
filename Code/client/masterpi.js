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
    }, 500) // Send signal for 500ms
    res.sendStatus(200); // OK
});

app.listen(3000,function(){
  console.log("Started on PORT 3000");
});

process.on('SIGINT', () => { // Bad file description error on close
    trigger.unexport();
    process.exit(0);
  });