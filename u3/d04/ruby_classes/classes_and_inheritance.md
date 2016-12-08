# Classes, Inheritance, & OOP

### Learning Objectives
- Define object properties and methods
- Demonstrate and explain instantiation
- Explain how an object's properties are only accessible with getter methods
- Write getter methods and setter methods to retrieve and set a property's value
- Create a class that inherits from another class
- Differentiate local, instance, class, and global variables

##### Why this is important
Ruby is a a great way of learning object oriented programming as everything is an object. To really understand the nature of this concept and how it changes our approach to programming, we need to understand what exactly that means, as well as the implications of Classical Inheritance.

##### How we will learn this
- Discuss difference btwn an object and a hash
- Review the concept of classes and instantiation
- Create a class
- Instantiate an instance
- Discuss getters and setters aka attribute accessors
- Discuss and practice using classical inheritance

### Objects
Everything in Ruby is an object. What does that actually mean?

- First off, objects in Ruby are not the same as objects in JS. Key / Value pairs in ruby are referred to as Hashes.
- That means that everything you are interacting with, every entity, has properties and methods contained inside it.
- The data types you are used to are objects (a hash is an object, a string is an object, a boolean value is an object, a fixnum inherits from integer which inherits from numeric which inherits from object)
- Literally everything "inherits" from the Object Class, think of this as the cradle of life for ruby.


### The Concept of Classes & Instantiation
Classes are literally blueprints from which individual objects are created. Classes define object properties and methods so that they can be accessed by an instance of that class. Here are some examples to best describe this process...

- Car Example
Let's create a class Car. Within that class we can define all the components that make up a car: engine, transmission, mpg, etc. We don't have any car object yet but the class allows us to capture and organize all the relevant data and functionality that a car object will need. We can then instantiate a type of car. That instance of car will only be able to access the components and functionality defined in the class.

### Creating a Class
Bla bla bla. Let's learn by doing.

Let's start by making a class for a King of Hearts

- First we define the class and methods to capture the pertinent attributes of that object. Let's set the value to an integer of 10. And the suit can be captured as a string of "heart".

```ruby
class King
	def value
		10
	end

	def suit
		"heart"
	end
end
```

Now that we've created the blueprint for a King of Hearts, let's actually create an instance of it.

```ruby
king_of_hearts = King.new

puts king_of_hearts
puts king_of_hearts.suit
puts king_of_hearts.value
```

Hmm...why would we want to create more than one King of Hearts? Let's try to a better example.


```ruby
class Dog
	def breed
		"Shiba Inu"
	end

	def name
		"Carrie"
	end

	def nickname
		"Cuckoo Bear"
	end

	def bark1
		puts "Bark Bark Bark!"
	end

	def bark2
		puts "Shriek howl!"
	end
end
```

Now to instantiate...

```ruby
carrie = Dog.new
p carrie
puts carrie.breed
puts carrie.name
puts carrie.nickname
carrie.bark1
carrie.bark2
```

##### Setters and Getters

Notice how we can use methods to do some form of functionality? We are also using methods to store attributes. These attributes are referred to as Setters and Getters.

It's a matter of accessibility.

Note that carrie can't access carrie.suit

```ruby
carrie.suit = "hearts"
```

Why? carrie is a Dog object and we only allowed Dog objects to access breed, name, nickname, bark1, and bark2.

Ruby allows us an even quicker way to create class attribute setters and getters.

```ruby
class Dog
	attr_accessor :breed, :name, :nickname, :bark1, :bark2
	# there's also just attr_reader for getters & attr_writer for setters
	#attr_accessor gives you both!
end
```

-----
Exercise
- Create a class Cat using attr_accessor and assign it :name, :color
- create variable called new_cat and set to an instantiation of your class Cat
- access the :name, :color on new_cat and assign it values!

##### Recap
So let's see..We're creating a class. Then we instantiate it. Then we populate the values for those attributes. That's a bit tedious. Can we just instantiate with values off the get go?

We can use a special initialize method!

```ruby
class Dog
	attr_accessor :name, :nickname, :breed
	attr_reader :bark1, :bark2

	def initialize(name, nickname, breed, bark1)
		@name = name
		@nickname = nickname
		@breed = breed
		@bark1 = bark1
		@bark2 = "whats up"
	end

end

my_dog = Dog.new("Carrie", "Cuckoo Bear", "Shiba Inu")

p my_dog

p my_dog.name
p my_dog.nickname
p my_dog.breed

my_dog.bark1
my_dog.bark2
```

##### Variables

The initialize method is special and innately relates to the object that is being instantiated. So what's up with the @name, @nickname, @breed?

These are instance variables. They are specifically referring to the instance of Dog being run from the initialize function. In other words, we are throwing in parameters when calling .new and this one single instance of the new instantiated object are taking those attributes and setting them accordingly for just this one time.

_____

Below is more info on ruby variables

Variables in a Ruby Class:
Ruby provides four types of variables:

- Local Variables:
Local variables are the variables that are defined in a method. Local variables are not available outside the method. You will see more details about method in subsequent chapter. Local variables begin with a lowercase letter or _.

- Instance Variables:
Instance variables are available across methods for any particular instance or object. That means that instance variables change from object to object. Instance variables are preceded by the at sign (@) followed by the variable name.

- Class Variables:
Class variables are available across different objects. A class variable belongs to the class and is a characteristic of a class. They are preceded by the sign @@ and are followed by the variable name.

- Global Variables:
Class variables are not available across classes. If you want to have a single variable, which is available across classes, you need to define a global variable. The global variables are always preceded by the dollar sign ($).

_____
Exercise

- Create a class Student
	- with getters and setters for :first_name, :last_name, :age, :favorite_food
	- Use the initialize method!
	- Instantiate yourself by passing in the instance variables as arguments when calling .new
	- Verify the object using a puts or p statement

- Create a class Card
	- with getters and setters for :suit, :value, :points
	- Use the initialize method!
	- Instantiate any card used in blackjack
	- Verify the object using a puts or p statement


### Class vs Instance Methods
A class method is a method that the actual class has access to. It does not need an instantiated instance to invoke it. In other words, the class method is a method for the blueprint itself.

An instance method is a method that an instance of the class can call.

```ruby
class Car

	def self.promote
		puts "Cars are cool!"
	end

	def vroom
		puts "Vroom Vroom"
	end

end

Car.promote

new_car = Car.new
new_car.vroom
```

##### self
Self is the equivalent to `this` in javascript. The ruby keyword `self`	gives tou access to the current object being evaluated.

-----
Exercise

- Create a class Meeseeks
- Create a class method that puts "I'm Mr. Meeseeks, look at me!"
- Create an instance method called `blame` that puts "HE roped me into this!"

### Inheritance

Ruby utilizes classical inheritance. This means classes can inherit attributes from another class. The concept is very similar to parent/child DOM elements inheriting CSS.

```ruby
class GameEntity
	attr_accessor :name, :hitpoints, :attack_dmg

	def initialize(name, hitpoints, attack_dmg)
		@name = name
		@hitpoints = hitpoints
		@attack_dmg = attack_dmg
	end
end


class Player < GameEntity
	def attack
		puts "You take #{@attack_dmg} damage!"
	end
end

class Ogre < GameEntity
	def initialize(hitpoints, attack_dmg)
		@name = "Zum"
		@hitpoints = hitpoints
		@attack_dmg = attack_dmg
	end
end

player1 = Player.new("Joe", 100, 9999)
ogre1 = Ogre.new(10, 1)

puts player1
puts ogre1

player1.attack
```

-----
Exercise
- Create a class for Card
- Create a class for FaceCard which inherits from Card but has value set to 10
- Create a class for Ace which inherits from Card and has a value set to 11


Other Exercises
- Create an class that represents something in this room right now
- Create an class that one of your favorite existing web applications might have in their codebase
- Create an class that represents a person who would use an application
- Create an class you could imagine being useful in applications designed for students in this course
