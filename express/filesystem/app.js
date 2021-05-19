var express = require("express");
var path = require("path");
var fs = require("fs");
var http = require("http");
var logger = require("morgan");

var app = express();
app.use(logger("short"));

app.use(function(request, response, next){
    next();
});

var staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));

app.use(function(request, response){
    response.status(404);
    response.send("File not found!");
});

// Middleware with 4 arguements (err, req, res, next) are specifically error handling middleware
// When error is thrown, call next(new Error("Error msg")) to go to next middleware for errors (not regular middleware)
// Three or two arguments are the non-error, standard middleware.

http.createServer(app).listen(3000, function() {
    console.log("App started on port 3000");
})