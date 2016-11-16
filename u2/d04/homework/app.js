var http = require("http");
var fs = require("fs");
var port = 8080;

var getHTML = function(res){
  res.writeHead(200 , {"Content-type": "text/html"});
  var html = fs.readFileSync(__dirname + "/public/index.html");
  res.end(html);
};

var getCSS = function(res){
  res.writeHead(200 , {"Content-type": "text/css"});
  var css = fs.readFileSync(__dirname + "/public/style.css");
  res.end(css);
};

