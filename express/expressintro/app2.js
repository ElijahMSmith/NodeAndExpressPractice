var express = require("express");
var http = require("http");
var logger = require("morgan");

var app = express();

// Include morgan as 3rd party middleware to log requests
app.use(logger("short"));

// Modifies request and response before passing along middleware stack
app.use(function(request, response, next){
    var minute = (new Date()).getMinutes();
    if(minute % 2 === 0)
        next();
    else {
        response.statusCode = 403;
        response.end("Not authorized");
    }
});

app.use(function(request, response){
    response.end("You're in baby!");
})

http.createServer(app).listen(3000);