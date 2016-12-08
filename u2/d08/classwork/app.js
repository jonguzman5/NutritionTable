var express = require("express");
var app = express();
var mstE= require('mustache-express');
var pgp = require("pg-promise")();
var bp = require("body-parser");
var mo = require("method-override");
var  db  = pgp("postgres://student_05@localhost:5432/crudapp1");

var port = process.env.PORT || 1234;
app.listen(port)
console.log("Server started on " + port);
app.engine('html', mstE());
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/public"));
app.use(mo('_method'))
app.use(bp.urlencoded({extended: false}));
app.use(bp.json());
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

app.get("/users", function(req, res){
  db.many("SELECT * FROM users").then(function(data){
    var usersdata =  {UsersData : data}
    console.log(usersdata);
    res.render('index', usersdata)
  });
});
app.get("/users/:id", function(req, res){
  db.one("SELECT * FROM users WHERE  id=$1", [req.params.id]).then(function(data){
    var userdata=  {UserData : data}
    console.log(userdata);
    res.render('single', userdata)
  });
});
app.put('/users/:id',function(req, res){
  user = req.body
  id = req.params.id

  db.none("UPDATE users SET name=$1, email=$2, password=$3 WHERE id=$4",
    [user.name,user.email,user.password,id])

  res.redirect('/users/'+id);
});
app.get('/create',function(req,res){
  res.render('create')
})
app.post('/users',function(req, res){
  user = req.body

  db.none('INSERT INTO users (name,email,password) VALUES ($1,$2,$3)',
    [user.name,user.email,user.password])

  res.render('index')
});

app.delete('/users/:id',function(req, res){
  id = req.params.id
  db.none("DELETE FROM users WHERE id=$1", [id])
  res.render('index')
});


