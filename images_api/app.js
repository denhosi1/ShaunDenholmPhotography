const express = require('express'),
    bodyParser = require('body-parser'),
    galleryImageRoutes = require('./routes/galleryImages'),
    app = express(),
    port = process.env.PORT || '3000';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
    res.send("Hello from the root route!!!");
});

app.use('/api/galleryImages', galleryImageRoutes);

app.listen(port, function() {
    console.log("App is running on port " + port);
});