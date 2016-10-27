"use strict";
$(document).ready(function(){
  console.log('script loaded.')
  $('body').append('<p>')
  $('body').append('<p>')
  $('body').append('<p>')
  $('body').append('<p>')
  $('body').append('<p>')

  var i = 0
  $('p').each(function(object){
    i++
    this.innerText = "Paragraph: " +i
  })

  //grab first in collection
  $('p').first()

  $('p').last().hide()
  $('p').last().show()
  // $removed_item = $('p').last().remove()

  var $temp = $('p').last().clone()
  $('body').append($temp)
  $('p').last().text('Paragraph: 6')

  // $('p').css('cursor','pointer')
  $('p').css({
    'cursor':'pointer',
    'color':'red'
  })

  var pOver = function(){
    $(this).css('background-color','blue')
  }
  var pOut = function(){
    $(this).css('background-color','white')
  }
  $('p').hover(pOver,pOut)

  $('p').last().attr('align','center')
  $('p').last().attr('data-secret-password','abc123')




})