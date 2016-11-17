
//start here. 
var express = require('express')
var app = express()

// listen is a function, it takes 2 arguments
// the port number and a callback. for the callback
// we can just console.log that it is running.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// get is a function, like in an ajax call. its our http verb
// it takes 2 arguments, the route and a callback. 
// the callback has 2 arguments also, request and response
app.get('/', function(req, res){
	res.send('Hello World.')
})

// this is a simple post route. we can hit it with post
// man and have it console log. 
app.post('/test', function(req, res){
	console.log('post successful.')
})

// what do we need 
// return more than just basic stuff... how about
// json?
app.get("/json_data",function(req,res){
  var json_data = {"name":"john","pass":"1234"};
  return res.json(json_data);
})

// lets try to hit a post with post man and see if we 
// can get params from the url.  

// google or docs for how to get params. 

// goal: console long what id param you are requesting
pry = require('pryjs')
app.get('/user/:id', function(req, res){
	// eval(pry.it)
	id = req.params.id
	route =  req.route.path
	console.log('route hit: '+route)
	console.log('id requested: '+id)
	res.send('asked for '+id)
})





// so our /user/id was not pretty. 
// here's how we do our views: 

// require mustache 
var mustacheExpress = require('mustache-express')

// configure. this is given to us by the mustache docs
app.engine('html',mustacheExpress())
app.set('view engine','html')
app.set('views',__dirname + '/html')
app.use(express.static(__dirname+'/public'))

app.get('/pretty', function(req, res){
  res.render('index', { name: 'John' });
});


//when doing this, stop at the array. 

app.get('/pretty/user/:id', function(req,res){
	eval(pry.it)
	id = req.params.id
	console.log('id requested: '+id)
	res.render('example2.html',{
		id: req.params.id,
		arr: ["sample1","sanmple2","sample3"],
		students: [
		{name:'Kevin',score:100},
		{name:'Mark',score:79},
		{name:'Julie',score:95},
		{name:'Dana',score:70},
		{name:'Jeremy',score:68},
		{name:'Steven',score:92}
		]
	})
})




