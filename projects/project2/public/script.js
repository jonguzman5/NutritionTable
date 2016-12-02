$(document).ready(function() {
//Queries all related to search
  var searchData = function(nutritionfacts){
    var food = {search:nutritionfacts}
     $.ajax({
    url: "/search",
    method: 'post',
    data: food
    }).done(function(nfacts){
      console.log(nfacts)
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

  var appendNutrition = function(nutrition, nutrition2){
    var nutrients =  $('#nutritionfacts')
    console.log(nutrition)
    // console.log(nutrition2)
    nutrients.append('<div>'+nutrition+'</div>');
    nutrients.append('<div>'+nutrition2+'</div>');
  };

  var nutritionData = function(data){
    var productName = data.hits[0].fields.item_name;
    var productCalories = data.hits[0].fields.nf_calories;
    console.log(productCalories);
    appendNutrition(productName, productCalories)
    $('#savebutton').click(function(event) {
      var saved = {
        name : productName,
        calories : productCalories
      }
      console.log(saved);
    $.ajax({
      url: "/save",
      method: 'post',
      data: saved
      })
    });
  }

}); // jQuery function close
