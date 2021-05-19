var express = require("express");
var http = require("http");

var app = express();

app.use(function(request, response, next){
    console.log('In comes a ' + request.method + ' request to: ' + request.url);
    next();
});

app.use(function(request, response){
    // Modifies the header of the returned object (body of which is the text in end())
    response.writeHead(200, {"Content-Type": "text/plain"}); 
    response.end("Hello, world (but with express this time)!");
})

http.createServer(app).listen(3000);