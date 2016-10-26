//1//
//a//
console.log(detectives.mulder.name);
//b//
for(var i in detectives.mulder){
  console.log(detectives.mulder[i])
}
//c//
console.log(detectives.mulder.name + "and" + detectives.scully.name + ", played by " + detectives.mulder.actor + "and" + detectives.scully.actor + "are detectives in the X-Files");
//d//
for(var i = 0; i<readingList.length; i++){
  console.log(readingList[i].title);
  console.log(readingList[i].author);
  console.log(readingList[i].alreadyRead);
}
//e//
for(var i = 0; i<readingList.length; i++){
  console.log(readingList[i].title +" by " + readingList[i].author)
}
//f//
for(var i = 0; i<readingList.length; i++) {
  if(readingList[i].alreadyRead){
    console.log('You already read ' + readingList[i].title);
  }else{
    console.log('You still need to read ' + readingList[i].title);
  }
}
//g//
function printmovie(alien){
  console.log(alien.title + " directed by " + alien.director + " released in " + alien.releaseYear + " it lasts for " + alien.duration + " minutes" + ". It stars " + alien.stars)
}
printmovie(alien);
//2//
//a//
var subtitle = document.getElementById('subtitle')
console.log(subtitle);

var clickListItem = document.getElementById('clickListItem');
clickListItem.onclick = function(){
 console.log( "You have clicked the li with the text 'Click Me'")
}
