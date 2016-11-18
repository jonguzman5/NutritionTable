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

var getJS = function(res){
  res.writeHead(200 , {"Content-type": "text/js"});
  var js = fs.readFileSync(__dirname + "/public/script.js");
  res.end(js);
};

var server = http.createServer(function(req, res){
  if(req.url === "/style.css"){
    getCSS(res);
  }else if (req.url === "/index.html"){
    getHTML(res);
  }else if (req.url === "/script.js"){
    getJS(res);
  }

});

server.listen(port);
console.log("listening on port " + port);

