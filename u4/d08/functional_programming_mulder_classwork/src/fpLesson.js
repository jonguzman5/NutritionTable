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

function workshop(){
  console.log('in workshop!');
  //console.log('pokemon[0]');
  //console.log(pokemon[0]);
  //console.log(sw);
  console.log('first try');
  var ar1 = ["HI", "THERE"];
  console.log(
    ar1.map(lo.toLower)
  );

  console.log('second try');
  var ar2 = [["HI"], ["THERE"]];
  console.log(
    ar2.map(innerAr =>
	    innerAr.map(lo.toLower)
	   )
  );

  console.log('third try');
  var ar3 = [
    [["HI"],
     ["THERE"]],
    [["Some"],
     ["HuMaNs"]]
  ];

  var digThrough = (x) => {
    if(lo.isString(x)){
      return(
	x.toLowerCase()
      );
    }else{
      return x.map(digThrough);
    }
  };

  console.log(
    digThrough(ar3)
  );

  console.log('fourth try');

  var digThrough2 = (x, f) => {
    if(lo.isString(x)){
      return(
	f(x) 
      );
    }else{
      return x.map(
	y => digThrough2(y, f)
      );
    }
  };

  console.log(
    digThrough2(
      ar3,
      (s) => s + " human bat"
    )

  );


  console.log('fifth try');

  var digThrough3 = (x, f) => {
    var y = f(x);
    if(lo.isArray(y)){
      return y.map(
	z => digThrough3(z, f)
      );
    }else{
      return y;
    }
  };

  console.log(
    digThrough3(
      ar3,
      x => {
	if(lo.isArray(x)){	  
	  return lo.concat(x, [0]);
	}else{
	  return x;
	}
      }
    )
  );


  console.log('sixth try');
  var ar4 = [
    {FiSh: ["HI"],
     SLUG: ["THERE"]},
    {MOUSE:["Some"],
     CHIPMUNK: ["HuMaNs"]}
  ];


  var digThrough4 = (x, f) => {
    var y = f(x);
    if(lo.isArray(y)){
      return y.map(
	z => digThrough4(z, f)
      );
    }else if(lo.isObject(y)){
      var obj = {};
      for (var k in y){
	obj[f(k)] = digThrough4(y[k],f);
      }
      return obj;
    }else{
      return y;
    }
  };

  console.log(
    digThrough4(
      ar4,
      s => lo.isString(s) ? s.toLowerCase() : s
    )
  );


  console.log('finale');
  console.log(
    digThrough4(
      pokemon[0],
      s => lo.isString(s) ? s.toLowerCase() : s
    )
  );

}


module.exports = function(){
  cn.runFuns(
    [// ["beholdPrewalk", beholdPrewalk]
      ["workshop", workshop]
    ]);
};
