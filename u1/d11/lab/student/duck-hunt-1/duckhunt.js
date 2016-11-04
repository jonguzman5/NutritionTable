// This is a jQuery "ready" closure:
jQuery(function() {
  // - Unlike a normal closure, we don't have to call it
  // - jQuery will call it when the page is loaded

  // I'll do some of the work for you, first I will grab the <body></body>
  var body = $('body');

  // 1. Can you create a <div> with the class "duck" and name it "duck"
var $duck = $('<div class ="duck"></div>');
body.append($duck);
  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
setInterval(function(){
  $duck.toggleClass('flap')
}, 200);
  // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"
$duck.css('left', Math.random() * window.innerWidth);
$duck.css('top', Math.random() * window.innerHeight);

  // 4. Try making the duck move to a different location after 1 second
setInterval(function(){
  $duck.css('top', Math.random() * window.innerHeight); $duck.css('left', Math.random() * window.innerWidth);
}, 200);
  // 5. Congratulations!
})
