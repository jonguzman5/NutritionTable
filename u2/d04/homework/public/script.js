jQuery(document).ready(function($) {

var addFirstEventListener = function(){
    $('#clickbutton').click(function() {
      $("#emptyspace1").html('<img src="' + hawaii.jpg + '" />');
    });
  };
  addFirstEventListener();

  var addSecondEventListener = function(){
    $('#hoverbutton').hover(function() {
      $("#emptyspace2").html('<img src="' + hawaiivolcano.jpg + '" />');
    });
  };
  addSecondEventListener();

});
