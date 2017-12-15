const express = require('express'),
    bodyParser = require('body-parser'),
    galleryImageRoutes = require('./routes/galleryImages'),
    app = express(),
    port = process.env.PORT || '3000';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile("index.html");
});

app.use('/api/galleryImages', galleryImageRoutes);

app.listen(port, function() {
    console.log("App is running on port " + port);
});