


"use strict";

(function(){
	$(document).ready(function(){
		// Hey Pangolins!
		// --------------
		// Let's have some fun!

	  // I'll do some of the work for you, first I will grab the <body></body>
	  var $body = $('body');
	  // 1. I'll create a <div> with the id of ralph. 
		var $ralph = $('<div id="ralph1"></div>');
		// Add the class ralph to this div. 
		$ralph.addClass('ralph')
	  // Append duck to the page.
  	$($body).append($ralph)

	 
	  var counter = 2

	  // 2. Create a .click function on ralph. When you click him, his ID Attribute
	  // should increment by one. You'll might into an issue here. Maybe you should 
	  // log the number you are incrementing and then look at the class names in the
	  // css file. 
  	$($ralph).click(function(){
	    $ralph.attr('id','ralph'+(counter-1));
	    $ralph.attr('id','ralph'+counter)
		console.log(counter)
			counter++


		// 3. There are 11 frames in the total animation. When #ralph11 (the last frame) 
		// is displayed, restart the animation back at the first. 
			if (counter == 12){
				counter =1
			}else if (counter == 6){
		// 4. When the counter hits the 5th frame (suprised), you should append a div with
		// the ID of 'speech1' to the page. 
				var $speech1 = $('<div id="speech1"></div>');
				$($body).append($speech1)			
		// 5. On the next frame, reassing the ID attribute of that div to 'speech2'		
			}else if (counter == 7){
				$('#speech1').attr('id','speech2')
		// 6. On the next frame, remove the speech div completely. 		
			}else if (counter == 8 ){
				$('#speech2').remove()
		// 7. On the last frame, add an alert letting the user know Ralph is just kidding!
			}else if (counter == 11){
				alert('JUST KIDDING!')
			}
  	})

		// 7. Congratulations! Bonus: Open the image, explore other series of frames. 
		// Create css rules and write more jQuery to create a new animation. 

	})
})();