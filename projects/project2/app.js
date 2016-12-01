// Initial Configuration
var express = require('express');
var app = express();
var mustacheExpress = require('mustache-express');
var pgp = require('pg-promise')();
var  db  = pgp('postgres://student_05@localhost:5432/users');
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
  var logged_in;
  var email;

  if(req.session.user){
    logged_in = true;
    email = req.session.user.email;
  }
  var data = {
    "logged_in": logged_in,
    "email": email
  }
  res.render('index', data);
});
app.get('/create',function(req,res){
  res.render('create')
})
app.get('/login',function(req,res){
  res.render('login')
})
app.get('/dashboard',function(req,res){
  res.render('dashboard')
})
app.post('/create', function(req, res){
  var data = req.body;
bcrypt.hash(data.password, 10, function(err, hash){
  db.none("INSERT INTO users (firstname, lastname, email, password_digest) VALUES ($1, $2, $3, $4)", [data.firstname, data.lastname, data.email, hash]).then(function(){
    res.send('Thank you for signing up')
    })
  })
})
app.post('/login', function(req, res){
  var data = req.body;
  db.one("SELECT * FROM users WHERE email=$1",[data.email]).catch(function(){
    res.send('The username and password you entered did not match our records. Please try again.')
  }).then(function(user){
  bcrypt.compare(data.password, user.password_digest, function(err, cmp){
    if(cmp){
      req.session.user = user;
      res.redirect('/');
    }else{
      res.send('The username and password you entered did not match our records. Please try again.')
      }
    })
  });
});

app.get('/logout', function(req,res){
      req.session.user = null;
      res.redirect('/');
})
// Getting data from API
app.post('/search', function(req,res){
    console.log(req.body)
    var id = req.body.search
    console.log(id)
    fetch('https://api.nutritionix.com/v1_1/search/'+id+'?results=0%3A50&cal_min=0&cal_max=50000&fields=*&')
    .then(function(response){
      return response.json(response)
      console.log(response)
    }).then(function(json){
      res.send(json)
    })
  });

app.post('/save', function(req,res){
  var id = req.body;
  console.log(id)
  console.log("Now Saving...")
      //Putting it in the database
      db.none("INSERT INTO saved (itemname, calories) VALUES ($1, $2)", [id.name, id.calories]).then(function(){
        res.render('/dashboard')
      })
})

app.get('/dashboard', function(req, res){
  db.many(SELECT * FROM users WHERE id = $1)
  //get the info from the databse with sql
  //send it to the front end with res.render
  //use mustache to render
})



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
