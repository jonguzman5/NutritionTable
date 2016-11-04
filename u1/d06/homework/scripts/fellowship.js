console.log("Linked.");

// Our heros
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

// Their compatriots
var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];


// Their journey
var lands = ['The Shire', 'Rivendell', 'Mordor'];
//1//
var makeMiddleEarth = function() {
  var section = document.createElement("section");
  section.id = "middle-earth";
  document.body.appendChild(section);

  for(i = 0; i < lands.length; i++){
    var article = document.createElement("article");
    var h1 = document.createElement("h1");
    var land = document.createTextNode(lands[i]);
    h1.appendChild(land)
    article.appendChild(h1);
    section.appendChild(article);
  }
};
makeMiddleEarth();

//2//
var makeHobbits = function(){
  var theShire = document.getElementsByTagName('article')[0];
  var ul = document.createElement("ul");
  theShire.appendChild(ul);
  for(i = 0; i<hobbits.length; i++){
    var li = document.createElement("li");
    var text = document.createTextNode(hobbits[i]);
    li.appendChild(text);
    li.className = "hobbits";
    ul.appendChild(li);
  }
}
makeHobbits();

//3//
var keepItSecretKeepItSafe = function(){
  var hobbitsTags = document.getElementsByClassName('hobbits');
  for(var i = 0; i<hobbits.length; i++){
    if (hobbitsTags[i].childNodes[0].nodeValue == "Frodo Baggins" ) {
      var div = document.createElement("div");
      div.className = "magic-imbued-jewelry";
      div.id = "the-ring";
      hobbitsTags[i].appendChild(div);
      break;
    }
  }
};
keepItSecretKeepItSafe();

//4//
var makeBuddies = function(){
  // create an aside tag
  var aside = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
  var ul = document.createElement("ul");
  aside.appendChild(ul);
  for(var i =0; i <buddies.length; i++){
    var li = document.createElement("li");
    var text = document.createTextNode(buddies[i]);
    li.appendChild(text);
    ul.appendChild(li);
  }
   var landsTags = document.getElementsByTagName('h1');
  for(var j = 0; j<landsTags.length; j++){
    alert(landsTags[j].innerHTML)
    if (landsTags[j].childNodes[0].nodeValue == "Rivendell") {
      landsTags[j].parentNode.appendChild(aside);
    }
  }
  // insert your aside as a child element of rivendell
}
makeBuddies();

