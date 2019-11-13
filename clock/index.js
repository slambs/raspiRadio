const express = require('express');
const path = require('path');

app = express();
port = 8760;

app.use(express.static(__dirname + '/page/'));

app.get( '/',(req,res) =>{
    res.status(200).sendFile(path.join(__dirname + '/page/'));

});

app.listen(port, ()=>{
    console.log(`Port runnuning at port ${port}`);
});