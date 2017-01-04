![pets](http://i.giphy.com/26h0q9kT1eULfuNWg.gif)
# ES6 Classes
JavaScript classes introduced in ECMAScript 6 are syntactical sugar over JavaScript's existing prototype-based inheritance. 

The class syntax is not introducing a new object-oriented inheritance model to JavaScript. 

JavaScript classes provide a much simpler and clearer syntax to create objects and deal with inheritance.


***

### 1. Do it the 'old' way...
Make a pre-ES6 ```pet``` object. Give it the following properties: 

1. a hungry property (initially false)  
1. a sick property (initially false)  
1. an age (initially set to 0)  
1. an activity property (initially set to 10)

Then add to it the following methods:</br>

1. ```feed()``` - if hungry is true, return "That was yummy!" and set hungry to false.  If hungry is false, return "No thanks, I'm full." and set hungry to true.  
1. ```medicate()``` - if sick is true, return "I feel much better - hope that vet visit didn't break the bank!" and set sick to false.  If sick is false, print "No thanks, I feel fine." and set sick to true.
1. ```increaseAge()``` - increase the age by one, decrease the activity level by one, and return "Happy Birthday to me! I am " + age + " years old and my activity level is " + activity + "!"


### 2. Step up your ECMAScript Game...
- Rewrite the pet object with as an ES6 Class named 'Pet'
- The constructor method is a special method for creating and initializing an object created with a class. Give your `Pet` class a constructor that takes a `name` for an arguement and includes the other appropriate properties.
- What do you think the below syntax will allow us to do? How would we create a new instance of our child classes if we use it?
  
        constructor( { name }) {
            //your initializations here...
        }


### 3. Make Some Pets
- Create the three custom pet classes below by extending your `Pet` constructor. 
- Each child class should inherit all the `options` from their parent in a constructor function, as well as have new methods unique to their species. 
- A child's constructor can use  `super()` to call the constructor of a parent class. How do we pass all the `options` from the parent `Pet` constructor to each child through using `super()`?
    - **Dog** should be the same as Pet except it should also have these abilities:
        1. ```bark()``` - prints "ruff ruff  
        2. ```goOutside()``` - prints "I own that tree now!"  
    - **Cat** should be the same as Pet except it should also have these abilities:
        1. ```meow()``` - prints "Meow!"  
        2. ```useLitterBox()``` - prints "Burried treasure!"  
    - **Fish** should be the same as Pet except it should also have these abilities:
        1. ```swim()``` - prints "Just keep swimming..."  


#### 4. Pets are the best!

Create a new instance of each type of pet, then run the following commands on the approprate:
1. Feed the dog twice, then check it's hunger.  
1. Increase the dog's age twice, then check how old it is.  
1. Make the dog bark.  
1. Make the dog go outside.  
1. Make the cat meow.  
1. Make the cat use the litter box.  
1. Give the fish medicine twice, then check it's health.  
1. Make the fish swim.

![Pets](http://i.giphy.com/xT8qBie2kASj2R3QD6.gif)
