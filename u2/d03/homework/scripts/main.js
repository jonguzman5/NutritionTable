$(document).ready(function(){

  var getData = function(cityName){
    return $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=" + apikey + "&units=imperial",
      method: "get"
    }).success(function(weatherData){
        console.log(weatherData);
        weatherContent(weatherData);
    })
  };
  var addEventListener = function(){
    $('#submit_button').click(function() {
      var weatherInput = $('#city_entered').val()
      getData(weatherInput);
    });
  };
  addEventListener();

  var appendWeather = function(city, temp){
    $('#forecast').text('It\'s' + temp + 'degrees farenheit in ' + city + 'today' );
  };

  var weatherContent = function(data){
    var temperature = data.main.temp;
    var date = data.date;
    appendWeather(temperature, date);
  }

}); //Query End
