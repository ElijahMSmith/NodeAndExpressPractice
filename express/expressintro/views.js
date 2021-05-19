var express = require("express");
var path = require("path");
var http = require("http");

var app = express();
// EJS dynamically generates html to display. Many more options, one of which is pug
app.set("views", path.resolve(__dirname, "ejs"));
app.set("view engine", "ejs");

app.get("/", function(request, response){
    response.render("index", {
        message: "Hey y'all! This is a test EJS homepage."
    });
});

http.createServer(app).listen(3000);