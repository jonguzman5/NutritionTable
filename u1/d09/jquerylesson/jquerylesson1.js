"use strict";
$(function(){
  console.log('loaded.')
$('body').append('<p>hi</p>')
$('body').append('<p>hi</p>')
$('body').append('<p>hi</p>')
$('body').append('<p>hi</p>')
$('body').append('<p>hi</p>')
var $first_p = $('p')[0];
$($first_p).prepend('<h1>HI WORLD</h1>')
var i = 0;
$('p').each(function(element){
  i++
  this.innerText = ("paragraph " +i )
})

})

// $('button').click(function() {
// console.log("Button Clicked!")
// });
