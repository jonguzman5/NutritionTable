// Example 1
document
  .getElementById('click-button')
  .addEventListener('click', function(event){
    var counter = document.getElementById('click-display');
    counter.innerHTML = 'click count: ' + event.detail;
  });
// Example 2
document
  .getElementById('hover-button')
  .addEventListener('mouseenter', function(e){
    var on = document.getElementById('hover-display');
    on.innerHTML = 'status: on';
});
  document
  .getElementById('hover-button')
  .addEventListener('mouseleave', function(e){
    var on = document.getElementById('hover-display');
    on.innerHTML = 'status: off';
});
// Example 3

// Example 4
  document
  .getElementById('input-box')
  .getElementsByClassName('control-label')
  .addEventListener('keydown', function(u) {
    var typeon =  document.getElementsByClassName('control-label')
    typeon.innerHTML = keydown('input-box');
  });
