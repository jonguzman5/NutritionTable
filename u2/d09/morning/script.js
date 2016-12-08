$(document).ready(function() {
  $('.handshake').hover(function() {
    $(this).addClass("shake-chunk");
  })
})
  $('#pingpongball').click(function(event) {
  var pingpongball = Math.floor($('#pingpongball').css('top').replace('px',''))
  if (pingpongball > 100){
    pingpongball.hide();
  };
setInterval(function(){
  $('.throw').each(function(){
    $(this).attr('class','')
  })
