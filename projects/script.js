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

var score = 0;
var $points = $('#points');
var $score =$('#score');
var dots = ['#leftdot','#middot','#rightdot']



setInterval(function(){
  $('.falling').each(function(){
    $(this).attr('class','')
  })
  var random_dot = dots[Math.floor(Math.random()*dots.length)];
  $(random_dot).attr('class','falling')
},1000)



$(document).keydown(function(key) {
  if (key.which == 65){
    $leftdottop = Math.floor($('#leftdot').css('top').replace('px',''))
    console.log('you pressed a.')
    console.log($leftdottop)
    if ($leftdottop > 650){
      console.log('good')
       score+=1;
      $score.text(score);
    }else{
      console.log('miss')
      score-=1;
      $score.text(score);
    }
  }


  if (key.which == 83){
    var $middottop = Math.floor($('#middot').css('top').replace('px',''))
    console.log('you pressed s.')
    console.log($middottop)
    if ($middottop > 650){
      console.log('good')
      score+=1;
      $score.text(score);
    }else{
      console.log('miss')
      score-=1;
      $score.text(score);
    }
  }

  if (key.which == 68){
    var $rightdottop = Math.floor($('#rightdot').css('top').replace('px',''))
    console.log('you pressed d.')
    console.log($rightdottop)
    if ($rightdottop > 650){
      console.log('good')
      score+=1;
      $score.text(score);
    }else{
      console.log('miss')
      score-=1;
      $score.text(score);
    }
  }
});
});

//Level one begins- random song selected from "leveloneplaylist" array//
///var $playmid = function(){
///$midkeys.keyup(function(){
//display points received//
//activate keyframe glow on letter and descending object//Manipulate in CSS, connect with jquery//
  ///});
///}
// })
