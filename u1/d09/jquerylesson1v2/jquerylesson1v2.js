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
  //grab first in collection
  $('p').last().hide()
  $('p').last().show()
  //$('p').last().remove()
  $removed_item = $('p').last().remove()
  var temp = $('p').last().clone()
  $('body'.append($temp))
  $('p').last().text('paragraph: 6')
  $('p').css('cursor', 'pointer')
  $('p').css({
    'cursor':'pointer',
    'color':'red'
  })
  var pOver = function(){
    $('p').css('background-color', 'blue')
  }
  var pOut = function(){
    $('p').css('background-color', 'white')
  }
  $('p').hover(pOver, pOut)
})

