$(document).ready(function() {
//Queries all related to search
  var searchData = function(nutritionfacts){
    var food = {search:nutritionfacts}
     $.ajax({
    url: "/search",
    method: 'post',
    data: food
    }).done(function(nfacts){
    nutritionData(nfacts)
    })
  };
  var inputFunction = function(){
    $("#indexsearchbar").keyup(function(enter){
    if(enter.keyCode == 13){
    var product = $('#indexsearchbar').val()
      searchData(product);
      }
    })
  }
  inputFunction();

  var appendNutrition = function(name, servingsize, servingsizepercontainer, calories, caloriesfromfat, totalfat, saturatedfat, transfat, cholesterol, sodium, totalcarbohydrate, dietaryfiber, sugars, protein, vitamina, calcium, vitaminc, iron){
    var nutrients =  $('#nutritionfacts')
    var handleHeading = function(){
      if(name.length <= 25){
        nutrients.append('<h4 id="largename">'+name+'</h4>');
      }else if(name.length > 25){
        nutrients.append('<h4 id="smallname">'+name+'</h4>');
      }
    }
    nutrients.append('<div id="container">'+ handleHeading() +
    '<div id="servingsize">'+servingsize+' g'+'</div>'+
    '<div id="servingsizepercontainer">'+servingsizepercontainer+'</div>'+
    '<div id="calories">'+calories+'</div>'+
    '<div id="caloriesfromfat">'+caloriesfromfat+'</div>'+
    '<div id="totalfat">'+totalfat+' g'+'</div>'+
    '<div id="saturatedfat">'+saturatedfat+' g'+'</div>'+
    '<div id="transfat">'+transfat+' g'+'</div>'+
    '<div id="cholesterol">'+cholesterol+' mg'+'</div>'+
    '<div id="sodium">'+sodium+' mg'+'</div>'+
    '<div id="totalcarbohydrate">'+totalcarbohydrate+' g'+'</div>'+
    '<div id="dietaryfiber">'+dietaryfiber+' g'+'</div>'+
    '<div id="sugars">'+sugars+' g'+'</div>'+
    '<div id="protein">'+protein+' g'+'</div>'+
    '<div id="vitamina">'+vitamina+' %'+'</div>'+
    '<div id="calcium">'+calcium+' %'+'</div>'+
    '<div id="vitaminc">'+vitaminc+' %'+'</div>'+
    '<div id="iron">'+iron+' %'+'</div>'+
    +'</div>')
  };

  var nutritionData = function(data){
    var productName = data.hits[0].fields.item_name;
    var productServingSize = data.hits[0].fields.nf_serving_weight_grams
    var productServingPerContainer = data.hits[0].fields.nf_servings_per_container
    var productCalories = data.hits[0].fields.nf_calories;
    var productCaloriesFromFat = data.hits[0].fields.nf_calories_from_fat
    var productTotalFat = data.hits[0].fields.nf_total_fat
      var productSaturatedFat = data.hits[0].fields.nf_saturated_fat
      var productTransFat = data.hits[0].fields.nf_trans_fatty_acid
    var productCholesterol = data.hits[0].fields.nf_cholesterol
    var productSodium = data.hits[0].fields.nf_sodium
    var productTotalCarbohydrate = data.hits[0].fields.nf_total_carbohydrate
      var productDietaryFiber = data.hits[0].fields.nf_dietary_fiber
      var productSugars = data.hits[0].fields.nf_sugars
    var productProtein = data.hits[0].fields.nf_protein
    var productVitaminA = data.hits[0].fields.nf_vitamin_a_dv
    var productCalcium = data.hits[0].fields.nf_calcium_dv
    var productVitaminC = data.hits[0].fields.nf_vitamin_c_dv
    var productIron = data.hits[0].fields.nf_iron_dv
    appendNutrition(productName, productServingSize, productServingPerContainer, productCalories, productCaloriesFromFat, productTotalFat, productSaturatedFat, productTransFat, productCholesterol, productSodium, productTotalCarbohydrate, productDietaryFiber, productSugars, productProtein, productVitaminA, productCalcium, productVitaminC, productIron)
    $('#savebutton').click(function(event) {
      var saved = {
        name : productName,
        servingsize: productServingSize,
        servingsizepercontainer: productServingSizePerContainer,
        calories : productCalories,
        caloriesfromfat: productCaloriesFromFat,
        totalfat: productTotalFat,
        saturatedfat: productSaturatedFat,
        transfat: productTransFat,
        cholesterol: productCholesterol,
        sodium: productSodium,
        totalcarbohydrate: productTotalCarbohydrate,
        dietaryfiber: productDietaryFiber,
        sugars: productSugars,
        protein: productProtein,
        vitamina: productVitaminA,
        calcium: productCalcium,
        vitaminc: productVitaminC,
        iron: productIron,
      }
    $.ajax({
      url: "/save",
      method: 'post',
      data: saved
      })
    });
  }

}); // jQuery function close
