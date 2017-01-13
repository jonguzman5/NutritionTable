// Arrow Functions

// interesting article: https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/

// load some printing conveniences
var cn = require('./common.js'),
    util = require('util');

function uses () {
  cn.text('Anonymous functions are extremely powerful and elegant.',
	  'Unfortunately, the anonymous function syntax in Javascript is',
	  'unneccesarily awkward in a number of ways. Arrow functions set out',
	  'to remedy this.');

  cn.text("Let's say we have some data we'd like to process functionally:");
  var db = [{name: 'Sonic', species: 'Hedgehog'},
	    {name: 'Tails', species: 'Fox'},
	    {name: 'Shadow', species: 'Hedgehog'},
	    {name: 'Knuckles', species: 'Echidna'}];
  console.log(db);

  cn.text("Old way to get all the hedgehogs:");
  console.log(
    db.filter(function(x){return x.species === "Hedgehog";})
  );

  cn.text("New way:");
  console.log(
    db.filter(x => x.species === "Hedgehog")
  );

  cn.text("Old way to get all the character names beginning with 'S':");
  console.log(
    db.map(function(x){return x.name;}).filter(function(name){return name[0] === 'S';})
  );

  cn.text("New way:");
  console.log(
    db.map(x => x.name).filter(name => name[0] === 'S')
  );

  cn.text("On one hand, we're just saving a few charcters; on the other hand, those few",
	  "characters add up quickly, and in practice may mean the difference between",
	  "bothering to use functional programming versus resorting to an imperative",
	  "for loop.",
	  "",
	  "Arrow functions do not implement some of the more confusing complexities of",
	  "normal Javascript functions, such as binding keyword 'this'. They are sort of",
	  "a do-over of the whole notion of a function in Javascript.");
}

function basicArrowFunctions () {
  cn.text('No args:');
  console.log(
    (() => 1 + 1)()
  );
  
  cn.text('One arg:');
  console.log(
    ((x) => x + 1)(1)
  );

  cn.text('Two args:');
  console.log(
    ((x, y) => x + y)(1, 2)
  );

  cn.text('With a single parameter, parentheses are optional:');
  console.log(
    (x => x + 1)(1)
  );
}


function blockBodies () {
  cn.text("For functions involving multiple statements, it is necessary to",
	  "demarcate the function body.");
  // doesn't work:
  // console.log(
  //   ((x, y) =>
  //    console.log("x: " + x);
  //    console.log("y: " + y);
  //    return x + y;
  //   )
  // );
  // does work:
  console.log(
    ((x, y) => {
      console.log("x: " + x);
      console.log("y: " + y);
    })(1, 2)
  );

  cn.text("If block syntax is used for the body of the arrow function,",
	  "we need to use the return keyword to specify a return value",
	  "(otherwise it's just undefined).");
  console.log(
    ((x, y) => {
      console.log("x: " + x);
      console.log("y: " + y);
      return x + y; // compare to previous example
    })(1, 2)
  );
}

function keywordThis () {
  cn.text("Unlike other Javascript functions, arrow functions",
	  "do not bind keyword 'this'.");
  
  var someObject = {
    someData: "this is some data on some object",
    normalFunction: function(){console.log(this);},
    arrowFunction: () => {console.log(util.inspect(this, {depth: 0}));},
    normalFunctionCalling_INNER_ArrowFunction: function(){
      var innerArrowFunction = () => console.log(this);
      innerArrowFunction();
    },
    normalFunctionCalling_OUTER_ArrowFunction:  function(){
      this.arrowFunction();
    }
  };  

  cn.text('Normal Javascript function in an object has that object bound to',
	  'keyword \'this\' by default:');
  someObject.normalFunction();
  cn.text('An arrow function in an object just inherits the keyword \'this\'',
	  'binding of the context in which it was defined. It closes over',
	  'keyword \'this\' as if keyword \'this\' were a normal variable.');

  cn.text("So if an arrow function is defined in a normal function, it will inherit that",
	  "function's binding for keyword 'this':");
  someObject.normalFunctionCalling_INNER_ArrowFunction();

  cn.text("But if an arrow function is merely called (rather than defined) by a normal",
	  "function, it will not:");
  someObject.normalFunctionCalling_OUTER_ArrowFunction();
  
}


module.exports = function(){
  cn.runFuns(
    [["uses", uses],
     ["basicArrowFunctions", basicArrowFunctions],
     ["blockBodies", blockBodies],
     ["keywordThis", keywordThis]
    ]);
};
