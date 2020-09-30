var express = require('express');
var app = express();

var os = require("os");
var hostname = os.hostname();
var pjson = require('./package.json');
app.get('/', function(req, res){
    res.send("hostname "+ hostname  + pjson.version)
});

console.log('Starting on port 8080')
app.listen(8080);
