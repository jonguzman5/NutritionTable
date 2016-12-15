////////////////////////////////////////////////
// Data
////////////////////////////////////////////////

// scully
let scully = [
  "Jonathan",
  "Bairon",
  "Laura",
  "Carson",
  "Justin",
  "Jayan",
  "Emmanuel",
  "Taj",
  "Wynter",
  "Taylor",
  "Kiba",
  "Matt",
  "Kristi",
  "Hillary",
  "Connie",
  "Michael"
];

// mulder
let mulder = [
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

let slips = [
  "What is Ruby on Rails? How is it different than Express?",
  "What are some differences between Object Oriented Programming (Ruby) vs Procedural Programming (Javascript)",
  "What is Active Record all about? Why should we use it?",
  "How do you feel about Ruby? Do you prefer it over Javascript? Why or why not?",
  "What is a Ruby Gem? How does Ruby handle libraries compared to Javascript?",
  "You're hired as a programmer! The boss asks you choose the new stack for your company. Rails, Sinatra, or Express. How do you choose? Why?",
  "Ruby sometimes let's us use symbols as methods. For example - << is the same as .push. Given the choice, when would you use either? Are you more comfortable with one or the other?",
  "Rails is BIG. Help us understand how the app structure is organized. Do you like the organization of Rails?",
  "Rails generators. It's cool building your app in the terminal. Or is it? What's your opinion of using Rails terminal commands to write your logic rather than coding it out yourself?",
  "How to create, alter, and delete a table in Active Record. Is this better than plain SQL?",
  "Ruby has many methods that have differently named aliases. Why is this? What are the benefits of alias names for methods and how would you choose between them?",
  "Explain helper methods, how to use them, and why you would want to use them",
  "Explain how Ruby classes work. How are they different from hashes? Do you prefer class inheritance over Javascript's Prototype inheritance?",
  "When using Ruby, we can use ERB tags for templating. Do ERB tags give us anything that Mustache was lacking in? Do you prefer one over the other?",
  "What is a Ruby method that you think is particularly awesome? How does it work? What does it do? Why do you think it's so awesome?",
  "Learning your first language can be really tough, and learning a second can be confusing at first. Tell us about YOUR experience transitioning from JS to Ruby. Have you found that learning Ruby has helped your understanding of JS? Has learning Ruby been easier or more difficult than learning JS?",
  "What is MVC? Explain each part and its relationship to the rest of the app.",
  "What is the difference between symbols and strings? When do we use each?",
  "Explain how everything is an object in Ruby. Tell us theoretically and practically what that means. Do you like this way of programming?",
  "Explain what an instance variable is, and how it is different than a local variable",
  "What are attr_reader, attr_writer, and attr_accessor? How do they relate to a class in Ruby?",
  "Explain the difference between classes and hashes in Ruby",
  "Explain classical inheritance and compare it to prototypes in Javascript"
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

// zip
let zip = function(students, values) {
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
let pKeyValue = function(obj){
  for (var key in obj) {
    if (typeof(obj[key]) !== 'function'){
      console.log(key + ": " + obj[key]);
    }
  }
};


////////////////////////////////////////////////
// randomly pair students with slips, and print
////////////////////////////////////////////////k
let students = {};
students.mulder = mulder;
students.scully = scully;

let makeSlips = function(){
  let cohort = process.argv[2];
  let shuffledStudents = students[cohort].shuffle();
  let shuffledSlips = slips.shuffle();
  let zippedStudentSlips = zip(shuffledStudents, shuffledSlips);
  pKeyValue(zippedStudentSlips);
}
makeSlips();
