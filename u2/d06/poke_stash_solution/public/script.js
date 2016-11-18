$(document).ready(function(){

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

  $('#blue-button-left').on('click',function(e){
    request = $('input#nb').val()

    if (request >0 && request <151){
      $.ajax({
        'url': 'http://localhost:3000/api/pokemon/'+request,
        'method': 'GET',
        'success': function(data){
          console.log(data)
          $('#screen img').attr('src','img/pokedex/pokemon/'+data+'.jpg')
          $('#info-screen').text(data.toUpperCase())
          getMoreData(data)

        }
      })
    }else{
      console.log('invalid pokemon number')
    }

  });


  var getMoreData = function(pokemon){ 
    var type_string = pokemon+"<br>"
    $.ajax({
      'url': 'http://pokeapi.co/api/v2/pokemon/'+(pokemon.toLowerCase()),
      'method': 'GET',
      'success': function(data){
        console.log(data)
        data.types.forEach(function(type){
          type_string = type_string + type.type.name+" type<br>"
          
        })
        $('#info-screen').html(type_string)
      }
    })    

  }
});