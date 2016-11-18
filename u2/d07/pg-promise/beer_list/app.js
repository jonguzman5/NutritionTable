/* An app will go here */
$( document ).ready(function() {
var express = require("express");
var app = express();
var port = process.env.PORT || 8080;


app.listen(port)
console.log("Server started on " + port);

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.send("index");
});

// set up an api route for get "/beers'
var beerRoute = function(){
  return $.ajax({
    method: "get",
    url: "/beers",
  }.promise(function(data){
    console.log(data)
  })
)};
  beerRoute();
// set up an api route for get "/beers/:id"



});


