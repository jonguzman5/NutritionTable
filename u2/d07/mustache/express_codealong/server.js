//start here
var express = require('express');
var app = express();

//listen is a function it takes 2 arguments
//the port number and the callback. for the callback, we can just log that its alive.
app.listen(3000, function(){
  console.log('Sever alive on port 3000!');
});

app.get('/',function(req,res){
  res.send("I guess the server is running.");
});

//mustache
var mustache = require('mustache-express');

//configure.
app.engine('html',mustache());
app.set('view engine','html');
app.set('views',__dirname+'/html');
app.use(express.static(__dirname+'/public'));

app.get('/pretty',function(req,res){
  res.render('index',{name:'John'});
});

app.get('/basic/:id',function(req,res){
  var id = req.params.id;
  res.render('example',{
    id: id,
    arr: ['sample1','sample2','sample3'],
    students: [
      {name:'Theobald',score:100},
      {name:'Fraznir',score:98},
      {name:'Drail',score:89},
      {name:'Enzolda',score:72},
      {name:'Mary',score:100}
    ]
  });
});

app.get('/furthermore/:id',function(req,res){
  var id = req.params.id;
  res.render('furthermore',
	     {
	       id: id,
	       arr: ['sample1','sample2','sample3'],
	       students: [
	     	 {name:'Theobald',score:100},
	     	 {name:'Fraznir',score:98},
	     	 {name:'Drail',score:89},
	     	 {name:'Enzolda',score:72},
	     	 {name:'Mary',score:100}
	       ]
	     });
});

app.get('/otherway/:id',function(req,res){
  var data = 	     {
    id: req.params.id,
    arr: ['sample1','sample2','sample3'],
    students: [
      {name:'Theobald',score:100},
      {name:'Fraznir',score:98},
      {name:'Drail',score:89},
      {name:'Enzolda',score:72},
      {name:'Mary',score:100}
    ]
  };
  var id = req.params.id;
  var page = "";
  page += "<p>The id is: " + data.id + "</p>";
  for(var i = 0; i < data.students.length; i++){
    page+= "<p>" + data.students[i].name + "</p>";
  }
  page+= "<h3>one way</h3>";
  res.render('otherway',
	     {
	       page: page
	     });
});


