// Some conveniences for this lesson.
"use strict";

// Print a separator
function sep(){
  console.log('----------------------------------------');
}

// Print a double separator
function dsep(){
  console.log('========================================');
}

function text(){
  console.log();
  for(var line of arguments){
    console.log(line);
  }
};

// Run through an array of labeled functions, printing labels and
// separators between them
function runFuns(funArr){
  for(let el of funArr){
    sep(); 
    var label = el[0], f = el[1];      
    console.log('Running ' + label);
    f();
  }
}


// (function(funArr){
//   for(let i of funArr){
//     var [label, f] = i;
//     sep();
//     console.log('Running ' + label);
//     f();
//   }
// })([1,2]);



module.exports = {
  sep: sep,
  dsep: dsep,
  runFuns: runFuns,
  text: text
};
