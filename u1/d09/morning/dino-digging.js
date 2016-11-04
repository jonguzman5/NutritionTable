var buenosAires = {
  location: "Buenos Aires",
  depthInMeters: "400",
  annualBudget: 1000000,
  specimens: ["Dilophosaurus","Brachiosaurus"]
};

var mexico = {
  location: "Mexico",
  depthInMeters: "350",
  annualBudget: 900000,
  specimens: ["Gallimimus","Parasaurolophus"]
};

var snakewaterMontana = {
  location: "SnakewaterMontana",
  depthInMeters: "10",
  annualBudget: 150000,
  specimens: ["Velociraptor","Brachiosaurus"]
};

var nicaragua = {
  location: "Nicaragua",
  depthInMeters: "200",
  annualBudget: 1500000,
  specimens: ["Tyrannosaurus Rex","Stegosaurous","Triceratops","Velociraptor"]
};
//1//
// var arr = [buenosAires, mexico, snakewaterMontana, nicaragua];
// for(var i =0; i<arr; i++);
// console.log(arr[i].specimens);

// for(var j =0; j<arr; j++);
// console.log(arr[j].depthInMeters / 4);
//2//
var hammondMines = [];
hammondMines.push(nicaragua, snakewaterMontana, mexico, buenosAires);
for(var k = 0; k<hammondMines; k++);
console.log(hammondMines[k].location)

//Had repl issue//


