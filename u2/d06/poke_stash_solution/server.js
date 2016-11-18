var pokemon = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard",
"Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna",
"Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans",
"Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran-f","Nidorina","Nidoqueen","Nidoran-m",
"Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff",
"Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett",
"Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine",
"Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp",
"Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem",
"Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio",
"Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee",
"Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee",
"Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea"
,"Seadra","Goldeen","Seaking","Staryu","Starmie","Mr.Mime","Scyther","Jynx","Electabuzz","Magmar",
"Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon",
"Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini",
"Dragonair","Dragonite","Mewtwo","Mew"];


//start here. require express
var express = require('express')
var app = express()

//listen function
app.listen(3000,function(){
  console.log('Our server is alive on port 3000.')
})

//require mustache
var mustacheExpress = require('mustache-express')

// configure. this is given to us by the mustache docs
app.engine('html',mustacheExpress())
app.set('view engine','html')
app.set('views',__dirname + '/html')
app.use(express.static(__dirname+'/public'))


// get route to server out our index file, css, script.js, jquery, etc.
app.get('/', function(req, res){
  res.render('index');
});


//get function. http verb, takes 2 arguments
//route and callback
app.get('/api/pokemon/:id', function(req,res){
  id = req.params.id //get the requested id
  id = parseInt(id)-1 //subtracts one to account for array starting at zero. 
  console.log("Pokemon "+(id+1)+" is: "+pokemon[id]) //log what you asked for
  res.send(pokemon[id]); //return to the requester 
})
