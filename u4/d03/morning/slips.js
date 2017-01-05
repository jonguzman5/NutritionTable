// print random mulder slips with node slips.js mulder
// print random scully slips with node slips.js scully


////////////////////////////////////////////////
// Data
////////////////////////////////////////////////

// scully
const scully = [
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
const mulder = [
  "James",
  "Puneet",
  "Xinke",
  "Mazhar",
  "Miriam",
  "Justin",
  "Bryan",
  "Glenn",
  "Jennifer",
  "Leslie",
  "Fariha",
  "Daniel",
  "Nick",
  "Marcela",
  "Michael",
  "Danielle",
  "Michelle",
  "Marcos",
  "Dominique"
];

const topics = [
  "Explain the differences between var, let, and const.",
  "What are ES6 classes? How do we use them?",
  "Explain destructuring in ES6.",
  "What are regular expressions? What do they do? How do we use them?",
  "What is React? What problem does it solve?",
  "What are components in React?",
  "Explain how React uses the virtual DOM.",
  "When does React know to re-render a component?",
  "What is Babel? Why do we use it with React.js?",
  "What is the difference between state and props?",
  "Explain JSX.",
  "What is Webpack? How does create-react-app use it?",
  "What does the componentWillMount method do?",
  "What are the differences between 'smart' and 'dumb' components?",
  "Explain some differences between jQuery and React. Which do you prefer?",
  "What does the shouldComponentUpdate method do?",
  "Explain Proptypes (not props) in React. How/Why do React developers use them?",
  "What are some event handlers we can use in our React components?",
  "What are the two ways you can style React components?"
];

////////////////////////////////////////////////
// LOGIC
////////////////////////////////////////////////

// .shuffle
Array.prototype.shuffle = function() {
  for (let i = this.length-1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
}

// zip
const zip = function(students, values) {
  hashName = {};
  if (students.length !== values.length) {
    console.log("Warning: Arrays are not equal lengths.");
  }
  for (let i = 0; i < students.length; i++) {
    hashName[students[i]] = values[i];
  }
  return hashName;
}

// pkeyValue
const pKeyValue = function(obj){
  for (let key in obj) {
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

const makeSlips = function(){
  const cohort = process.argv[2];
  const shuffledStudents = students[cohort].shuffle();
  const shuffledSlips = topics.shuffle();
  const zippedStudentSlips = zip(shuffledStudents, shuffledSlips);
  pKeyValue(zippedStudentSlips);
}
makeSlips();
