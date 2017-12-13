const express = require('express'),
    app= express();

const port = process.env.PORT || '3000';

app.get('/', function(req, res){
    res.send("Hi there from express!!!");
})

app.get('/shaun', function(req, res){
    res.send("Shaun is awesome!!!");
})

app.listen(port, function() {
    console.log("App is running on port " + port);
});