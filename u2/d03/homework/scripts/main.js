$(document).ready(function(){

  var getData = function(cityName){
    return $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=33d32a43c66c0bd96e09774d803c0a78&units=imperial",
      method: "get" //DON'T UPLOAD API KEY! ^
    }).success(function(weatherData){
        console.log(weatherData);
        weatherContent(weatherData);
    })
  };
  var addEventListener = function(){
    $('#submit_button').click(function() {
      var weatherInput = $('#city_entered').val()
      getData(); // <-- PLACE PARAMETER!
    });
  };
  addEventListener();

  var appendWeather = function(thing1, thing2){
    $('#forecast').append(thing1);
    $('.date').text(thing2);
  };

  var weatherContent = function(data){
    var temperature = data.main.temp;
    var date = data.date;
    appendWeather(temperature, date);
  }

}); //Query End
