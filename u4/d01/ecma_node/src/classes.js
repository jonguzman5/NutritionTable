// Classes

// load some printing conveniences
var cn = require('./common.js'),
    util = require('util');

function uses () {
  cn.text("While technically rather powerful, Javascript's function-based",
	  "prototypical inheritance pattern is notoriously confusing and",
	  "difficult to use, and serves to obscure many of the core ideas",
	  "behind class-based object-oriented programming.",
	  "",
	  "ES6 addresses this problem by introducing Javascript classes.",
	  "These will look much more like Ruby classes than the chains of",
	  "construtor functions linked by the 'prototype' property we've seen",
	  "in Javascript so far.");
}

function basicSyntax(){
  cn.text("The basic idea should be familiar from Ruby classes.",
	  "As in Ruby, we can use constructors, getters and setters,",
	  "and instance methods.");

  var Person = class {

    // Constructor! Sort of like in Ruby!
    constructor(name, age){
      this.name = name;
      this.age = age;
    }

    // Getter! Sort of like in Ruby!
    get introduction(){
      return(
	this._introduction |
	  "Hello, my name is " + this.name + 
	  " and I am " + this.age +
	  " years old!"
      );
    }

    // Setter! Sort of like in Ruby!
    set introduction(intro){
      this._introduction = intro;      
    }
  };

  var george = new Person("George", 45);
  console.log(george);
  console.log(george.name);
  console.log(george.age);
  console.log(george.introduction);

  cn.text("Like functions, we can define classes either using direct declarations,",
	  "or class expressions. The definition above is a class expression, here's a",
	  "class declaration:");

  class OtherPerson {
    constructor(name, age){
      this.name = name;
      this.age = age;
    }

    // Getter! Sort of like in Ruby!
    get introduction(){
      return(
	this._introduction |
	  "Hello, my name is " + this.name + 
	  " and I am " + this.age +
	  " years old!"
      );
    }

    // Setter! Sort of like in Ruby!
    set introduction(intro){
      this._introduction = intro;      
    }
  }

  var otherGeorge = new OtherPerson("Other George", 45);
  console.log(otherGeorge);
  console.log(otherGeorge.name);
  console.log(otherGeorge.age);
  console.log(otherGeorge.introduction);
};

function inheritance(){
  cn.text("Javascript classes make it easier to implement classical inheritance.");

  var Rigidbody = class {
    constructor (mass, velocity){
      this.mass = mass;
      this.velocity = velocity;
    }

    get momentum (){
      return(this.mass * this.velocity);
    }
    
  };

  var Car = class extends Rigidbody{
    constructor (mass, velocity, brand){
      // Call to keyword super at start of constructor function
      // initializes the instance using the constructor of the parent
      // class:
      super(mass, velocity);
      this.brand = brand;
    }

    // We can define methods in a straightforward way, too:
    explainBrand(){
      return "I'm so proud to be a " + this.brand + " car!!!";
    }
  };

  var someFord = new Car(2, 40, "Ford");
  
  console.log('Momentum:');
  console.log(someFord.momentum);
  console.log('Brand:');
  console.log(someFord.explainBrand());
};

function strictMode(){
  cn.text("One very important wrinkle of classes is that they are defined in",
	  "strict mode.",
	  "",
	  "Strict mode is a special mode the Javascript compiler and runtime can be in",
	  "that alters the meaning of the language in some subtle but important ways.",
	  "",
	  "For now, the most important aspect of strict mode is that functions defined",
	  "in it do not automatically reach into higher contexts to bind keyword 'this'.");

  cn.text("We're used to this sort of behavior in Javascript:");
  var lumpOfData = {
    data: "some important data goes here",
    selfReport: function(){
      console.log('here I am:');
      console.log(util.inspect(this, {depth: 0}));
    }
  };
  
  console.log(lumpOfData.selfReport());

  cn.text("When we detach the reportData function from lumpOfData:");

  var selfReport = lumpOfData.selfReport;
  console.log(selfReport());

  cn.text("Behavior in strict mode is different.");

  var LumpOfDataClass = class {
    constructor(){
      this.data = "some important data goes here";
    }

    selfReport (){
      console.log('here I am:');
      console.log(this.data);
      console.log(this);
    }
  };

  var lumpOfDataInstanceFromClass = new LumpOfDataClass();
  console.log(lumpOfDataInstanceFromClass.selfReport());
}


module.exports = function(){
  cn.runFuns(
    [["uses", uses],
     ["basicSyntax", basicSyntax],
     ["inheritance", inheritance] ,
     ["strictMode", strictMode]
    ]);
};
