var express = require("express");

var ALLOWED_IPS = [
    '127.0.0.1',
    '123.456.7.89',
    '::1'
];

var api = express.Router();

api.use(function(req, res, next){
    console.log("Request from IP '" + req.ip + "'");
    var userIsAllowed = ALLOWED_IPS.indexOf(req.ip) !== -1;
    if(!userIsAllowed){
        res.status(401).send("Not authorized!");
    } else {
        next();
    }
});

api.get("/users", function(req, res){
    res.end("users");
});

api.get("/user", function(req, res){
    res.end("user");
});

api.get("/messages", function(req, res){
    res.end("messages");
});

api.get("/message", function(req, res){
    res.end("message");
});

api.use(function(req, res){
    res.end("API home");
});

module.exports = api;


// If resuming from here, finished chapter 5 and move to c hapter 6 (building APIs)