console.log('u01d09 hw starter.js linked');

//A function will be created to use the mouse as a color changer for the boxes.
//A simple hover on top of the boxes will temporarily make the boxes green
//A click will make the color change to green permanent
//In order to remove event listeners at function that tells the hover effect to do nothing will be created.
var zones = document.querySelectorAll('.zone');
var allclicked = 0;
for(var i = 0; i < zones.length; i++){
  zones[i].onmouseover = function(){
    this.setAttribute('style', 'background-color: green');
};
zones[i].onmouseout = function() {
  this.setAttribute('style', 'background-color: white');
};
zones[i].onclick = function() {
  this.setAttribute('style', 'background-color: green');

  this.onmouseover = function() {

  };
  this.onmouseout = function() {
 };
 allclicked++;
 if (allclicked == 4) {
  console.log("Congratulations")
 }

  }
 }
