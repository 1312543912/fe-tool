var express = require('express');
var app = express();
var fs = require('fs');

app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + req.path);
});


var mock = require('./moc/moc.js');
var setOnline = mock.setOnline;

setOnline.forEach(function(item) {
    console.log(item.type);
    app[item.type](item.url, function(req, res) {
        item.moc(req, res);
    });
});


app.listen('8010', function() {
    console.log("server start success, port is 8010");
});