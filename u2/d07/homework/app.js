var express = require("express");
var app = express();
var mustacheExpress = require('mustache-express');
var pgp = require("pg-promise")();
var  db  = pgp("postgres://student_05@localhost:5432/realty_db");
var port = process.env.PORT || 9001;
app.listen(port)
console.log("Server started on " + port);
app.use(express.static(__dirname + "/public/"));

app.get('/', function(req, res){
  res.render('index');
});

app.get("/buildings", function(req, res){
  db.many("SELECT * FROM buildings").then(function(data){
    var buildings_data =  {AllBuildingData : data}
    console.log(buildings_data);
    res.render('buildings', buildings_data)
  });
});

app.get("/buildings/:id", function(req, res){
  db.one("SELECT * FROM buildings WHERE  id=$1", [req.params.id]).then(function(data){
    var one_building_data =  {OneBuildingData : data}
    console.log(one_building_data);
    res.render('building', one_building_data)
  });
});

app.get("/apartments", function(req, res){
  db.many("SELECT * FROM apartments").then(function(data){
    var apartments_data =  {AllApartmentsData : data}
    console.log(apartments_data);
    res.render('apartments', apartments_data)
  });
});

app.get("/apartments/:id", function(req, res){
  db.one("SELECT * FROM apartments WHERE  id=$1", [req.params.id]).then(function(data){
    var one_apartment_data =  {OneApartmentData : data}
    console.log(one_apartment_data);
    res.render('apartment', one_apartment_data)
  });
});

app.get("/tenants", function(req, res){
  db.many("SELECT * FROM tenants").then(function(data){
    var tenants_data =  {AllTenantData : data}
    console.log(tenants_data);
    res.render('tenants', tenants_data)
  });
});

app.get("/tenants/:id", function(req, res){
  db.one("SELECT * FROM tenants WHERE  id=$1", [req.params.id]).then(function(data){
    var one_tenant_data =  {OneTenantData : data}
    console.log(one_tenant_data);
    res.render('tenant', one_tenant_data)
  });
});

app.get("/doormen", function(req, res){
  db.many("SELECT * FROM doormen").then(function(data){
    var doormen_data =  {AllDoormenData : data}
    console.log(doormen_data);
    res.render('doormen', doormen_data)
  });
});

app.get("/doormen/:id", function(req, res){
  db.one("SELECT * FROM doormen WHERE  id=$1", [req.params.id]).then(function(data){
    var one_doorman_data =  {OneDoormanData : data}
    console.log(one_doorman_data);
    res.render('doorman', one_doorman_data)
  });
});

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/public/views');
app.use(express.static(__dirname + 'public'));


