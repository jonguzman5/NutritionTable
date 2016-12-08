var express = require("express");
var app = express();
var mustacheExpress = require('mustache-express');
var pgp = require("pg-promise")();
var bp = require('body-parser')
var  db  = pgp("postgres://student_05@localhost:5432/planetaryzoology");
var port = process.env.PORT || 2500;
app.listen(port)
console.log("Server started on " + port);
app.use(express.static(__dirname + "/public"));
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/');
app.use( bp.json() );       // to support JSON-encoded bodies
app.use(bp.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.get('/', function(request, response){
  response.render('index');
});

app.get('/species', function(req, res){
  db.many("SELECT species FROM creatures").then(function(data){
    var allspeciesdata=  {allspeciesdata: data}
    console.log(allspeciesdata);
    res.render('allspeciesdata', allspeciesdata);
  });
});
app.get("/planets", function(req, res){
  db.any("SELECT DISTINCT planet FROM creatures").then(function(data){
    var allplanetsdata=  {allplanetsdata : data};
    console.log(allplanetsdata);
    res.render('allplanetsdata', allplanetsdata)
  });
});
app.get("/planets/:planet", function(req, res){
  db.many("SELECT  * FROM creatures WHERE (planet  = $1)", [req.params.planet])
  .then(function(data){
    var onespeciesdata=  {onespeciesdata : data};
    console.log('in get /planets/:planet');
    console.log(onespeciesdata);
    res.render('onespeciesdata', onespeciesdata)
  });
});
app.get("/create", function(req, res){
  db.any("SELECT * FROM creatures").then(function(data){
    var create={create: data};
    console.log(create);
    res.render('createnewspecies', create)
  });
});
app.post('/createSpecies/:id',function(req, res){
   user = req.body
   id = req.params.id
   console.log("REQUEST",user)
   //db.none("UPDATE users SET species=$1, family=$2, habitat=$3, diet = $4, planet = $5 WHERE id=$6",
   //[species.species,species.family,species.habitat,species.diet,species.planet, id])

   //res.redirect('/species/');
});
app.get('/create',function(req,res){
  res.render('createnewspecies')
})

app.post('/species:species',function(req, res){
  user = req.body

  db.none('INSERT INTO species (species,family,habitat,diet,planet,) VALUES ($1,$2,$3,$4,$5)',
    [species.species,species.family,species.habitat,species.diet,species.planet])

  res.render('allspeciesdata')
});
