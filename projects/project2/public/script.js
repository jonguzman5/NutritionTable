$(document).ready(function() {
//Queries all related to search
  var searchData = function(nutritionfacts){
    var food = {search:nutritionfacts}
     $.ajax({
    // url: "https://api.nutritionix.com/v1/search/"+ nutritionfacts + "?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=&appKey=",
    url: "/search",
    method: 'post',
    data: food
    }).done(function(nfacts){
      console.log(nfacts.hits[0])
    nutritionData(nfacts)
    })
    };
//Queries a specific item from search
  // var getItemData = function(specificItem){
  //   return $.ajax({
  //     url: "https://api.nutritionix.com/v1/item/"+ specificItem +"appId=&appKey=",
  //     method: 'get'
  //   }).done(function(specific){
  //     console.log(specific)
  //     searchData(specific)
  //   })
  //   }
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
      var productBrand = data.brand_name;
      var productServingSize = data.nf_serving_size_qty;
      var productCalories = data.nf_calories;
      var productCaloriesFromFat = data.nf_calories_from_fat;
      var productTotalFat = data.nf_total_fat;
      var productSaturatedFat = data.nf_saturated_fat;
      var productCholesterol = data.nf_cholesterol;
      var productSodium = data.nf_sodium;
      var productCarbs = data.nf_total_carbohydrate;
      var productDietaryFiber = data.nf_dietary_fiber;
      var productSugars = data.nf_sugars;
      var productProtein = data.nf_protein;
      var productVitaminA = data.nf_vitamin_a_dv;
      var productVitaminC = data.nf_vitamin_c_dv;
      var productCalcium = data.nf_calcium_dv;
      var productIron = data.nf_iron_dv;
      appendNutrition(productName,productBrand,productServingSize,productCalories,productCaloriesFromFat,productTotalFat,productSaturatedFat,productCholesterol,productSodium,productCarbs,productDietaryFiber,productSugars,productProtein,productVitaminA,productVitaminC,productCalcium, productIron)
    };





}); // jQuery function close
