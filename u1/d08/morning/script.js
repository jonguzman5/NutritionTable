//1//
var Jonathan = {};
Jonathan.firstname = "Jonathan";
Jonathan.lastname = "Guzman";
Jonathan.age = 18;
Jonathan.hobbies = ["css", " learning", " and trying new food"];
//2//
function printJon(){
  console.log(Jonathan.firstname);
  console.log(Jonathan.lastname);
}
printJon(Jonathan);
//2+//
function printJon(obj){
  console.log(obj.firstname);
}
printJon(Jonathan);
//3//
Jonathan.printName = function() {
  console.log(this.firstname);
};
//3+//
Jonathan.printName = function() {
  return this.firstname + " "+this.lastname;
}
Jonathan.printName();
//4//
Jonathan.printData = function(){
  console.log("Hi, I'm " + this.firstname + " "+ this.lastname +", I'm " + this.age + " years old. " + " My hobbies include " + this.hobbies + ".");
}
Jonathan.printData();
//4+//
Jonathan.printData = function(){
  var str = "Hi my name is " + this.printName() + " my hobbies include + Jonathan.hobbies";
  for(var i = 0; i <hobbies.length; i++)
  str += this.hobbies[i];
  console.log(str);
}
Jonathan.printData();



