$(document).ready(function() {
//Queries all related to search
  var searchData = function(nutritionfacts){
    var food = {search:nutritionfacts}
     $.ajax({
    url: "/search",
    method: 'post',
    data: food
    }).done(function(nfacts){
      console.log(nfacts.hits[0])
    nutritionData(nfacts)
    })
    };
  var inputFunction = function(){
    $("#indexsearchbar").keyup(function(enter){
    if(enter.keyCode == 13){
    var product = $('#indexsearchbar').val()
      console.log(product);
      searchData(product);
      }
    })
  }
  inputFunction();

    var appendNutrition = function(nutrition){
      var nutrients =  $('#nutritionfacts')
      console.log(nutrition)
      nutrients.append('<div>'+nutrition+'</div>');
    };

    var nutritionData = function(data){
      var productName = data.hits[0].fields.item_name;
      appendNutrition(productName)
    };




}); // jQuery function close
