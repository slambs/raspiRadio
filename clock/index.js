const express = require('express');
const path = require('path');

app = express();
port = 8760;

app.use(express.static(__dirname + '/'));

app.get( '/',(req,res) =>{
    res.status(200).sendFile(path.join(__dirname + '/'));

});

app.listen(port, ()=>{
    console.log(`Port runnuning at port ${port}`);
});