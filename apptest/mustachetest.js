var mustache = require("mustache");
var result = mustache.render("Hi, {{first}} {{last}}!", {
    first: "Nicholas",
    last: "Cage"
});

console.log(result);