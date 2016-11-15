$(document).ready(function(){
  var first_film_url = "http://swapi.co/api/films/1/";

  // Do AJAX calls here
//1//
$.ajax({
url: "http://swapi.co/api/films/1/",
method: "GET",
success: function(data){
console.log(data);
$.ajax({
  url: data.starships[6],
  method: "get",
  success: function(shipdata){
    console.log(shipdata)
    $.ajax({
      url: shipdata.pilots[2],
      method: "get",
      success: function(pilotdata){
      console.log(pilotdata)
      var container = $('#titles #titlecontent p');
        container.text(JSON.stringify(pilotdata))
    }
    })
  }
})
}
});
});


