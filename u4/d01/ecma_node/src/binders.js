// Classes

// load some printing conveniences
var cn = require('./common.js'),
    util = require('util');

function uses () {

}

function letBinding(){

}


function constBinding(){

}


module.exports = function(){
  cn.runFuns(
    [["uses", uses],
     ["letBinding", letBinding],
     ["constBinding", constBinding] ,
    ]);
};
