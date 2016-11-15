////////////////////////////////////////////////
// Data
////////////////////////////////////////////////

// scully
var scully = [
  "Jonathan",
  "Bairon",
  "Laura",
  "Carson",
  "Justin",
  "Jayan",
  "Emmanuel",
  "Ta",
  "Wynter",
  "Taylor",
  "Kiba",
  "Matt",
  "Kristi",
  "Hillary",
  "Connie",
  "Michael",
  "Kasaun"
];

// mulder
var mulder = [
  "James",
  "Puneet",
  "Xinke",
  "Mazhar",
  "Miriam",
  "Vanice",
  "Justin",
  "Bryan",
  "Glenn",
  "Jennifer",
  "Sarah",
  "Leslie",
  "Fariha",
  "Daniel",
  "Nick",
  "Marcela",
  "Michael",
  "Robert",
  "Danielle",
  "Michelle",
  "Marcos",
  "Dominique"
];

var slips = [
  "Array.map()",
  "Array.filter()",
  "Array.reduce()",
  "JSON.stringify()",
  "this keyword. how does it relate to objects?",
  "AJAX",
  "JSON",
  "NaN - what does it mean? what data type is it?",
  "for in loops with objects",
  "Array.every()",
  "Array.concat()",
  "String.match()",
  "String.endsWith()",
  "String.startsWith()",
  "Constructor Functions",
  "Javscript Ternary Operator",
  "Javscript Date object",
  "CSS Keyframe Animation",
  "Skeleton CSS",
  "jQuery - .text() vs .val()",
  "!= vs. !==",
  "Switch Statement",
  "Callback Functions"
];

////////////////////////////////////////////////
// LOGIC
////////////////////////////////////////////////

// .shuffle
Array.prototype.shuffle = function() {
  for (var i = this.length-1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
}

// .zip
var zip = function(students, values) {
  hashName = {};
  if (students.length !== values.length) {
    console.log("Warning: Arrays are not equal lengths.");
  } 

  for (var i = 0; i < students.length; i++) {
    hashName[students[i]] = values[i];
  }
  return hashName;
  
}

// pkeyValue
var pKeyValue = function(obj){
  for (var key in obj) {
    if (typeof(obj[key]) !== 'function'){
      console.log(key + ": " + obj[key]);
    }
  }
};


////////////////////////////////////////////////
// randomly pair students with slips, and print
////////////////////////////////////////////////

// assign students areray
//var students = scully;
//var students = mulder;

// shuffle students array
var shuffledStudents = students.shuffle();

// shuffle slips array
var shuffledSlips = slips.shuffle();

// combine students & slips into object
var slipinStudents = zip(shuffledStudents, shuffledSlips);

// cleanly print students & their slips
pKeyValue(slipinStudents);
