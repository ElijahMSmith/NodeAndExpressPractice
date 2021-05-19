var url = require("url");
var parsedURL = url.parse("https://example.com/profile?name=brian");
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);