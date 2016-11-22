var express = require("express");
var app = express();
var mustacheExpress = require('mustache-express');
var pgp = require("pg-promise")();
var  db  = pgp("postgres://student_05@localhost:5432/hogwarts_crud");
var port = process.env.PORT || 3000;
app.listen(port)
console.log("Server started on " + port);
app.use(express.static(__dirname + "/public/"));
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views/');
app.use(express.static(__dirname + 'public'));

// app.get('/', function(req, res){
//   res.render('index');
// });
app.get('/home', function(req, res){
    res.render('home/index');
  });

app.get('/students', function(req, res){
  db.many("SELECT * FROM students").then(function(data){
    var studentdata =  {studentdata: data}
    console.log(studentdata);
    res.render('students/index', studentdata);
  });
});
app.get("/students/:id", function(req, res){
  db.many("SELECT * FROM students WHERE  id=$1", [req.params.id]).then(function(data){
    var student=  {student : data}
    console.log(student);
    res.render('students/show', student)
  });
});

app.get('/houses', function(req, res){
  db.many("SELECT * FROM houses").then(function(data){
    var housesdata =  {Houses: data}
    console.log(housesdata);
    res.render('houses/index', housesdata);
  });
});
app.get("/houses/:id", function(req, res){
  db.one("SELECT * FROM houses WHERE  id=$1", [req.params.id]).then(function(data){
      db.many("SELECT * FROM students INNER JOIN houses ON (houses.id=students.house_id ) WHERE house_id=$1", [req.params.id]).then(function(data){
    var symbol = data[0];
    console.log(symbol);
    var house =  {"house" : data, "symbol": symbol}
    console.log(house);
    res.render('houses/show', house)
  });
})
});



