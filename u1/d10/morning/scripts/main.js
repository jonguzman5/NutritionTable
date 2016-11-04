console.log("Page Loaded");

$(document).ready(function(){
// Students! Write your playful jQuery code here!

// 2. Query the DOM for the h1 and store it in a sensibly named variable.
var $h1 = $('h1');
//var $h1 = document.querySelector('h1');
// 3. Change the heading's text so that it reads "Inhabitants of Los Angeles (1984)".
$($h1).text('Inhabitants of Los Angeles (1984)')
// 4. Query the DOM for any list items with the class of cop, and store the elements in a variable called cops.
var $cops = $('li.cop');
//var $cops = document.querySelectorAll('.cop')
// 5. Make all the cops' names the color of lightskyblue.
$($cops).css('color', 'lightskyblue')
// 6. Create a div with the class of terminator, and append it to the div with the id of los-angeles.
$('#los-angeles').append($('<div class = "terminator"></div>'))
//$('#los-angeles').append('<div class = "terminator">')
// 7. Query the DOM for the element with id of the-one-true-sarah-connor, and save it in a variable called theOneTrueSarahConnor.
var $theOneTrueSarahConnor = $('#the-one-true-sarah-connor')
//var $theOneTrueSarahConnor = document.querySelector('#the-one-true-sarah-connor')
// 8. Give theOneTrueSarahConnor the class of badass.
$theOneTrueSarahConnor.addClass('badass')
//$($theOneTrueSarahConnor).attr('class', 'badass')
// 9. Query the DOM for all elements that have the class collateral-damage, and save the elements in a variable called poorSouls.
var $poorSouls = $('.collateral-damage');
//var $poorSouls = document.querySelector('.collateral-damage')
// 10. Remove poorSouls from the DOM one by one.
$poorSouls.each(function(i, li) {
  var el = $(li);
  el.delay(500 * i).fadeOut(2000)
  });
});
