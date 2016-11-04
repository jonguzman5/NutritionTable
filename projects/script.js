jQuery(function() {

// var $midkeys = ["a", "s", "d","f","g","h","j","k","l"];
// var $topkeys = ["q", "w" ,"e", "r", "t", "y","u","i","o","p"];
// var $bottomkeys = ["z","x","c","v","b","n","m"];
/// var $leveloneplaylist = ["GGGEE.mp3",""]
/// var $leveltwoplaylist = [" "," "," "," "];
/// var $levelthreeplaylist = [" "," "," "," "];
/// var $levelfourplaylist = [" "," "," "," "];

// var $descent = function(){
// var level_one = new Audio('GGgee.mp3');
// level_one.play();
// descent();


setInterval(function(){
  $('#leftdot').attr('class','falling')
})
$(document).keydown(function(key) {
  if (key.which == 65){
    $leftdottop = Math.floor($('#leftdot').css('top').replace('px',''))
    console.log('you pressed a.')
    console.log($leftdottop)
    if ($leftdottop > 650){
      console.log('good')
    }else{
      console.log('miss')
    }
  }
});


setInterval(function(){
  $('#middot').attr('class','falling')
})
$(document).keydown(function(key) {
  if (key.which == 83){
    var $middottop = Math.floor($('#middot').css('top').replace('px',''))
    console.log('you pressed s.')
    console.log($middottop)
    if ($middottop > 650){
      console.log('good')
    }else{
      console.log('miss')
    }
  }
});

setInterval(function(){
  $('#rightdot').attr('class','falling')
})
$(document).keydown(function(key) {
  if (key.which == 68){
    var $rightdottop = Math.floor($('#rightdot').css('top').replace('px',''))
    console.log('you pressed d.')
    console.log($rightdottop)
    if ($rightdottop > 650){
      console.log('good')
    }else{
      console.log('miss')
    }
  }
});

})

//Level one begins- random song selected from "leveloneplaylist" array//
///var $playmid = function(){
///$midkeys.keyup(function(){
//display points received//
//activate keyframe glow on letter and descending object//Manipulate in CSS, connect with jquery//
  ///});
///}
// })
