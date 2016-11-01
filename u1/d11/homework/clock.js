$(function(){
  "use strict";

  // Declare variables here that use jQuery to grab
  // each of the clock hands
      var $secondHand = $('#second-hand');
      var $minuteHand = $('#minute-hand');
      var $hourHand = $('#hour-hand');
      var i = 0;

  var clock = function(){
      window.setInterval(function(){
            $($secondHand).css('transform', 'rotate(' + i*60 + 'deg)');
            i++;
            }, 1000);
      window.setInterval(function(){
            $($minuteHand).css('transform', 'rotate(' + i*6 + 'deg)');
            i++;
            }, 60000);
      window.setInterval(function(){
            $($hourHand).css('transform', 'rotate(' + i*6 + 'deg)');
            i++;
            }, 3600000);
}
  clock();
})
