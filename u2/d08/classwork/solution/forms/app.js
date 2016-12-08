//require things
var exp = require ('express'),
    mstE = require('mustache-express'),
    bdPars = require('body-parser'), //body parser
    methodOverride = require('method-override'), //method override
    pgp = require('pg-promise')(),
    db = pgp('postgres://bell@localhost:5432/pangolin_forms'),
    app = exp();

//configure express and related packages
app.engine('html', mstE());
app.set('view engine','html');
app.set('views',__dirname + '/views');
app.use('/', exp.static(__dirname + '/public'));
app.use(methodOverride('_method')) //method override
app.use(bdPars.urlencoded({ extended: false })); //body parser
app.use(bdPars.json()); //body parser

//start the server
app.listen(3000, function(){
  console.log('alive on 3k');
});

//show all users.
app.get('/users', function(req, res){
  db.any('SELECT * FROM users')
  .then(function(data){
    var users = {'users':data};
    res.render('index',users);
  });
});

//show one user.
app.get('/users/:id',function(req, res){
  db.one('SELECT * FROM users where ID = $1',[req.params.id])
  .then(function(data){
    var user = data
    res.render('single',user);
  });
});

//update a single user.
app.put('/users/:id',function(req, res){
  user = req.body
  id = req.params.id

  db.none("UPDATE users SET name=$1, email=$2, password=$3 WHERE id=$4",
    [user.name,user.email,user.password,id])

  res.redirect('/users/'+id);
});

//show the view to make a new user.
app.get('/create',function(req,res){
  res.render('create')
})

//create a new user.
app.post('/users',function(req, res){
  user = req.body

  db.none('INSERT INTO users (name,email,password) VALUES ($1,$2,$3)',
    [user.name,user.email,user.password])

  res.render('index')
});

//delete a single user.
app.delete('/users/:id',function(req, res){
  id = req.params.id
  db.none("DELETE FROM users WHERE id=$1", [id])
  res.render('index')
});
