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
	       // functions work like post-processors.
	       happyTone: function(){
		 return(function(text, render){
		   return "<p>it's just great that " + render(text) + " is a person</p>";
		 });
	       },
	       students: [
		 {name:'Theobald',score:100},
		 {name:'Fraznir',score:98},
		 {name:'Drail',score:89},
		 {name:'Enzolda',score:72},
		 {name:'Mary',score:100}
	       ]
	     }
	    );
});

