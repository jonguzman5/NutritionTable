// Initial Configuration
var express = require('express');
var app = express();
var mustacheExpress = require('mustache-express');
var pgp = require('pg-promise')();
var  db  = pgp('postgres://student_05@localhost:5432/DATABASENAMEGOESHERE');
var bp = require('body-parser');
var methodOverride = require('method-override');
var fetch = require('node-fetch');
var bcrypt = require('bcrypt');
var session = require('express-session');
var port = process.env.PORT || 9002;
app.listen(port)
console.log('Server started on ' + port);
//Further configuration
app.use(express.static(__dirname + '/public/'));
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/');
app.use(methodOverride('_method'))
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(session({
  secret: 'passwordhider',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
// Manipulation begins
app.get('/', function(req, res){
  res.render('index');
});
app.get('/create',function(req,res){
  res.render('create')
})
app.get('/dashboard',function(req,res){
  res.render('dashboard')
})
// Getting data from API
app.post('/search', function(req,res){
    console.log(req.body)
    var id = req.body.search
    console.log(id)
    fetch('https://api.nutritionix.com/v1/search/'+ id + '?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=&appKey=')
    .then(function(response){
      return response.json(response);
      console.log(response)
    }).then(function(json){
      res.send(json)
    })
});


// app.get('/buildings', function(req, res){
//   db.many('SELECT * FROM buildings').then(function(data){
//     var buildings_data =  {AllBuildingData : data}
//     console.log(buildings_data);
//     res.render('buildings', buildings_data)
//   });
// });

// app.get('/buildings/:id', function(req, res){
//   db.one('SELECT * FROM buildings WHERE  id=$1', [req.params.id]).then(function(data){
//     var one_building_data =  {OneBuildingData : data}
//     console.log(one_building_data);
//     res.render('building', one_building_data)
//   });
// });
