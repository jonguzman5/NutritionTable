var cn = require('./src/common.js');

// This file is just an entry point for running code in other files.
var scriptPath = 
      './src/fpLesson.js';

var script = require(scriptPath);

function top(){
  
  console.log('Running from the top.');
  console.log('scriptPath: ' + scriptPath);
  script();
}

top();
