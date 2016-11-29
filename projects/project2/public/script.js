$(document).ready(function() {


// $("#indexsearchbar").keydown(function(enter){
//     if(enter.keyCode == 13){
//         $("#indexsearchbutton").click(function(){
//           $(
//             console.log(enter)
//           )
//         });
//     }
// });

  var inputFunction = function(){
    $('#indexsearchbutton').click(function(event) {
    var product = $('#indexsearchbar').val()
    console.log(product);
    searchData(product);
    });
  };
  inputFunction();

  var searchData = function(nutritionfacts){
    return $.ajax({
      // change to url:http:localhost/display/taco
    url: "https://api.nutritionix.com/v1/search/"+ nutritionfacts + "?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=&appKey=",
    method: 'get'
    }).done(function(nfacts){
      console.log(nfacts)
    nutritionData(nfacts)
    })
    };

    var getItemData = function(){
      return $.ajax({
        url: "https://api.nutritionix.com/v1/item/513fc9e73fe3ffd40300109f?appId=&appKey=",
        method: 'get'
      }).done(function(specific){
        console.log(specific)
        searchData(specific)
      })
      }

    var nutritionData = function(data){
      var productName = data.Product;
      var productCalories = data.Calories;
      var productCarbs = data.Carbohydrates;
      var productProtein = data.Protein;
      appendNutrition(productName, productCalories ,productCarbs, productProtein)
    };

  var appendNutrition = function(name,imagePath){
    var product = ('<div></div>')
  };



}); // jQuery function close
