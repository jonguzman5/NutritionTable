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
  console.log('--------------------------------');
  console.log('sw');
  console.log(sw);
  console.log('pokemon[0], transformed to lowercase:');
  console.log(
    prewalk(
      x => lo.isString(x) ? lo.toLower(x) : x,
      pokemon[0]
    )
  );
}

function workshop(){
  cn.text('in workshop');
  cn.text('case 1');
  var ar1 = ['HI', "THere"];
  console.log(
    ar1.map(lo.toLower)
  );
  console.log(
    "RHINOCEROUS".toLowerCase()
  );
  console.log(
    ar1.map(
      s => s.toLowerCase())
  );
  
  var ar2 = [["HI"], ["THERE"]];
  console.log('first try:');
  // console.log(
  //   ar2.map(
  //     x => x.toLowerCase())
  // );
  console.log('second try:');
  console.log(
    ar2.map(
      ar => ar.map(lo.toLower)
    )
  );

  var ar3 = [
    [["HI"],
     ["THERE"]],
    [["YOU"], 
     ["PEOPLE"]]
  ];
  console.log('third try');
  var dig = (x) => {
    if(lo.isString(x)){
      return lo.toLower(x);
    }else{
      // assume x is array
      return(
	x.map(dig)
      );
    }
  };
  console.log(
    dig(ar3)
  );
  console.log('fourth try');
  var dig2 = (x, f) => {
    if(lo.isString(x)){
      return f(x);
    }else{
      // assume x is array
      return(
	x.map(
	  (y)=> dig2(y, f)
	)
      );
    }
  };
  console.log(
    dig2(ar3, lo.toLower)
  );
  
  console.log('fifth try');
  var dig3 = (x, f) => {
    if(! lo.isArray(x)){
      return f(x);
    }else{
      // assume x is array
      return(
	x.map(
	  (y)=> dig3(y, f)
	)
      );
    }
  };
  console.log(
    dig3(ar3, lo.toLower)
  );

  console.log('sixth try');
  var dig4 = (x, f) => {
    var y = f(x);
    if(! lo.isArray(y)){
      return y;
    }else{
      // assume x is array
      return(
	y.map(
	  (y)=> dig4(y, f)
	)
      );
    }
  };
  console.log(
    dig4(ar3, lo.toLower)
  );

  var ar4 = [
    [{REVOLUTION:["HI"],
      TWIST:["THERE"]}],
    [{SKULLY:["YOU"], 
      BLORT:["PEOPLE"]}]
  ];

  console.log('seventh try');
  var dig5 = (x, f) => {
    //var y = f(x);
    var y = x;
    if(lo.isArray(y)){
      // assume x is array
      return(
	y.map(
	  (y)=> dig5(y, f)
	)
      );
    }else if(lo.isObject(y)){
      return(
	lo.fromPairs(
	  lo.map(
	    lo.toPairs(y),
	    (pair) =>
	      [f(pair[0]) ,pair[1]]
	      //pair.map(z =>dig5(z, f))
	  )));
    }else{
      return y;
    }
  };
  console.log(
    dig5(ar4,
    	 (x)=> lo.isString(x) ? lo.toLower(x) : x)
  );
  console.log(
    dig5(ar4,
    	 (x)=> lo.isString(x) ? lo.toLower(x) : x)[0][0]
  );

}

module.exports = function(){
  cn.runFuns(
    [//["beholdPrewalk", beholdPrewalk],
      ["workshop", workshop]
    ]);
};
