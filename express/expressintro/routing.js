var express = require("express");
var path = require("path");
var http = require("http");
const { response } = require("express");

var app = express();

var publicPath = path.resolve(__dirname, "images");
app.use(express.static(publicPath));

// Matching all of a particular format. Has a security issue to be discussed later.
app.get("/user/:who", function(request, response){
    response.end("Hello, Master " + request.params.who + ".");
});

app.get("/", function(request, response){
    response.end("Welcome to my homepage!");
});

app.get("/about", function(request, response){
    response.end("Welcome the about page!");
});

app.get("/weather", function(request, response){
    response.end("The current weather is GREAT!");
});

app.use(function(request, response){
    response.statusCode = 404;
    response.end("404 - Not found!");
});

http.createServer(app).listen(3000);