const express = require('express');
const path = require('path');
const backlight = require('rpi-backlight');
const { exec } = require('child_process');

function writeToFile() {
    exec('node measureTemp.js > tempIn.txt', (err, stdout, stderr) => {
        if(err){
            console.error(err);
        } else {
        console.log('temp written to file');
        }
    });
}


app = express();
port = 8760;

app.use(express.static(__dirname ));
app.use(express.static('node_modules'));


app.get( '/',(req,res) =>{
    res.status(200).sendFile(path.join(__dirname)); 
});



// The screen goes Off at <= 9 brightness value
app.get('/setBrightness/:value', (req, res) => {
    backlight.setBrightness(req.params.value).then(() => {
        return backlight.getBrightness();
    }).then((newBrightnessValue) => {
        res.send('Screen brightness is now: ' + newBrightnessValue + '<br><a href="/">Back to home page</a>');
    }).catch((err) => {
        backlight.getMaxBrightness().then((maxBrightnessValue) => {
            if (req.params.value > maxBrightnessValue) {
                res.send('ERR: Max value is ' + maxBrightnessValue + '<br><a href="/">Back to home page</a>');
            } else {
                res.send('ERR: Min value is 0' + '<br><a href="/">Back to home page</a>');
            }
        });
    });
});

app.listen(port, ()=>{
    console.log(`Port runnuning at port ${port}`);
});

// write values of temp sensor to a tempIn.txt file every

