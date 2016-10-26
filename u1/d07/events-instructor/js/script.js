// Example 1
document.getElementById("click-button").addEventListener("click", function( event ) {
  var counter = document.getElementById("click-display");
  counter.innerHTML = "click count: " + event.detail;
}, false);

// Example 2
document.getElementById("hover-button").addEventListener("mouseenter", function( event ) {
  var container = document.getElementById("hover-display");
  container.innerHTML = "status: on";
}, true);

document.getElementById("hover-button").addEventListener("mouseleave", function( event ) {
  var container = document.getElementById("hover-display");
  container.innerHTML = "status: off";
}, false);

// Example 3
window.addEventListener('scroll', function(e) {
  var container = document.getElementById("scroll-display");
  container.innerHTML = "mouse: (" + window.scrollX + "," + window.scrollY + ")";
}, false);

// Example 4
var input = document.getElementById("input-box");

input.addEventListener('keyup', function(e) {
  var container = document.getElementById("input-label");
  container.innerHTML = input.value;
}, false);
