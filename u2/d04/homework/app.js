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

var serverres1 = http.createServer(function(req, res){
  if(req.url === "/index.html"){
    getHTML(res);
  }
});
var serverres2 = http.createServer(function(req, res){
  if(req.url === "/style.css"){
    getCSS(res);
  }
});

serverres1.listen(port);
console.log("listening on port " + port);
serverres2.listen(port);
console.log("listening on port " + port);

