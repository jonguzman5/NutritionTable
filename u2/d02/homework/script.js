$(document).ready(function(){

  var getData = function(movieTitle){
    return $.ajax({
      url: "http://www.omdbapi.com/?t=" + movieTitle + "&r=json",
      method: "get"
    }).success(function(movieData){
        handleResponse(movieData);
    })
  };

  var addAJAXFunction = function(){
    $('#search-bar button').click(function(event) {
      var movieTitle = $('#search-bar input').val()
      getData(movieTitle);
    });
  };
  addAJAXFunction();

  var appendMovie = function(name,imagePath){
  $('h5').text(name);
  $('img').attr('src', imagePath);
  };

  var handleResponse = function(data){
  var movieName = data.Title;
  var moviePoster = data.Poster;
  appendMovie(movieName, moviePoster);
  };

}); // ends doc.ready
