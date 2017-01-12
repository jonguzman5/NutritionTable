// functional programming with lodash!

// lodash api:
// https://lodash.com/docs/4.17.4
var cn = require('./common.js'),
    util = require('util'),
    // usually it's best to use _, the dumb node repl is weird about this though
    lo = require('lodash'), 
    pokemon = require('../data/pokemon.js'),
    sw = require('../data/strengthsAndWeaknesses.js');


function prewalk(f, x){
  var y = f(x);
  if(lo.isObject(y)){
    return(
      lo.fromPairs(
	lo.map(
	  lo.toPairs(y),
	  (entry) => 
	    lo.map(entry, 
		   z => prewalk(f, z))))
    );
  }else if(lo.isArray(y)){
    return lo.map(y, z => prewalk(f, z));
  }else{
    return f(x);
  }
}

function beholdPrewalk () {
  cn.text("Prewalk generalizes the idea of scanning over a collection and",
	  "performing some transformation (ie, calling some function)",
	  "on every item in it.");
  console.log('pokemon[0]:');
  console.log(pokemon[0]);
  console.log('pokemon[0], transformed to lowercase:');
  console.log(
    prewalk(
      x => lo.isString(x) ? lo.toLower(x) : x,
      pokemon[0]
    )
  );
}

module.exports = function(){
  cn.runFuns(
    [["beholdPrewalk", beholdPrewalk],
    ]);
};
