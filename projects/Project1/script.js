jQuery(function() {

// var $midkeys = ["a", "s", "d","f","g","h","j","k","l"];
// var $topkeys = ["q", "w" ,"e", "r", "t", "y","u","i","o","p"];
// var $bottomkeys = ["z","x","c","v","b","n","m"];

var score = 0;
var $points = $('#points');
var $score =$('#score');
var $dots = ['#leftdot','#middot','#rightdot'];

var $descent = function(){
var $levelplaylist = ["BAPThatsMyJam.mp3","CRAYONPOPDooDoomChit.mp3","DALSHABETFriSatSun.mp3","EXOCHENFTALESSOYears.mp3","GOT7HardCarry.mp3","INXAlright.mp3","IOIVeryVeryVery.mp3"]
var random_file = $levelplaylist[Math.floor(Math.random() * $levelplaylist.length)];
var audio = new Audio(random_file);
audio.play();
}
$descent();

setInterval(function(){
  $('.falling').each(function(){
    $(this).attr('class','')
  })
  var random_dot = $dots[Math.floor(Math.random()*$dots.length)];
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
  if(score == 20){
    alert("You Win!");
     location.reload();
  }
});
});
