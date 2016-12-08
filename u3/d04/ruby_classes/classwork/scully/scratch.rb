<<<<<<< HEAD
# class King
#       def value_in_blackjack
#         puts "hi there"
#         rand(1..10)
#     end
#     def suit
#       "heart"
#     end
#   end
# king_of_hearts = King.new
# puts king_of_hearts.value_in_blackjack
# puts king_of_hearts.suit

# class Dog
#     def breed
#         "Shiba Inu"
#     end
#     def name
#         "Carrie"
#     end
#     def nickname
#         "Cuckoo Bear"
#     end
#     def bark1
#         puts "Bark Bark Bark!"
#     end
#     def bark2
#         puts "Shriek howl!"
#     end
# end
# carrie = Dog.new
=======
# - too specific
# class King
#   def value_in_blackjack
#     10    
#   end

#   def suit
#     "heart"
#   end
# end
# king_of_hearts = King.new
# puts king_of_hearts.value_in_blackjack
# puts king_of_hearts.value_in_blackjack
# puts king_of_hearts.suit



#carrie = Dog.new
>>>>>>> 5853a3f9a3a9b3ae1294f5892f3b7215cc9cdcb8
# p carrie
# puts carrie.breed
# puts carrie.name
# puts carrie.nickname
# carrie.bark1
# carrie.bark2
<<<<<<< HEAD

# class Dog2
#   attr_accessor :breed, :name, :nickname, :bark1, :bark2
# end
# carrie = Dog2.new
# carrie.breed = "Moose"
# carrie.name = "mooseDog"
# carrie.nickname = "howler"
# carrie.bark1 = "hooooooowl"
# carrie.bark2 = "bork"
=======
#carrie.suit = "hearts"


# class Dog2
#   attr_accessor :breed, :name, :nickname, :bark1, :bark2
  
# end                                   

# carrie = Dog2.new
# carrie.breed = "Moose"
# carrie.name = "mooseDog"

>>>>>>> 5853a3f9a3a9b3ae1294f5892f3b7215cc9cdcb8
# puts carrie.breed
# puts carrie.name
# puts carrie.nickname
# puts carrie.bark1
# puts carrie.bark2

<<<<<<< HEAD
# class Dog3
#   def breed = (value)
#     @breed = value
#   end
#   def breed
#     @breed
#   end
# end
=======

# class Dog3
#   attr_accessor :breed
  
#   # def breed=(value)
#   #   @breed = value
#   # end

#   # def breed
#   #   @breed
#   # end
# end

>>>>>>> 5853a3f9a3a9b3ae1294f5892f3b7215cc9cdcb8
# carrie = Dog3.new
# carrie.breed = "horse"
# puts carrie.breed

<<<<<<< HEAD
# class Cat
#   attr_accessor  :name, :color
# end
# new_cat = Cat.new
# new_cat.name = "Moo"
# new_cat.color = "Magenta"
# puts new_cat.name
# puts new_cat.color

# class Dog4
#     attr_accessor :name, :nickname, :breed
#     attr_reader :bark1, :bark2
#     def initialize(name, nickname, breed, bark1)
#         @name = name
#         @nickname = nickname
#         @breed = breed
#         @bark1 = bark1
#         @bark2 = "whats up"
#     end
# end
# my_dog = Dog4.new("Carrie", "Cuckoo Bear", "Shiba Inu", "Borf")
# p my_dog
# p my_dog.name
# p my_dog.nickname
# p my_dog.breed
# p my_dog.bark1
# p my_dog.bark2

##V2##
# class Dog4
    # attr_accessor :name, :nickname, :breed, :bark2
    # attr_reader :bark1
=======
# class Dog4
#     attr_accessor :name, :nickname, :breed, :bark2
#     attr_reader :bark1

>>>>>>> 5853a3f9a3a9b3ae1294f5892f3b7215cc9cdcb8
#     def initialize(name, nickname, breed, bark1)
#         @name = name
#         @nickname = nickname
#         @breed = breed
#         @bark1 = bark1
#         @bark2 = "whats up"
#     end
# end
<<<<<<< HEAD
# my_dog = Dog4.new("Carrie", "Cuckoo Bear", "Shiba Inu", "Borf")
# p my_dog
# p my_dog.name
# p my_dog.nickname
# p my_dog.breed
# p my_dog.bark1
# p my_dog.bark2
# my_dog.bark2 ="I am a goldfish"
# p my_dog.bark2

=======

# my_dog = Dog4.new("Carrie", "Cuckoo Bear", "Shiba Inu", "gorp")

# p my_dog

# p my_dog.name
# p my_dog.nickname
# p my_dog.breed

# p my_dog.bark1
# p my_dog.bark2

# my_dog.bark2 = "I am a goldfish"
# p my_dog.bark2


>>>>>>> 5853a3f9a3a9b3ae1294f5892f3b7215cc9cdcb8
# class Dog5
#   def initialize()
#     @hunger = 0
#   end
<<<<<<< HEAD
#   def wait()
#     @hunger = @hunger + 1
#   end
#   def feed
#     @hunger = @hunger - 1
#   end
#   def mood
#     10 - (@hunger *2)
#   end
# end
# lassy = Dog5.new
=======

#   def wait
#     @hunger = @hunger + 1
#   end

#   def feed
#     @hunger = @hunger - 1
#   end

#   def mood
#     10 - (@hunger * 2)
#   end

# end

# lassy = Dog5.new

>>>>>>> 5853a3f9a3a9b3ae1294f5892f3b7215cc9cdcb8
# p lassy.mood
# lassy.wait
# p lassy.mood
# p lassy.wait
# p lassy.mood
# lassy.feed
# p lassy.mood

<<<<<<< HEAD
# class Student
#   attr_accessor :first_name, :last_name, :age, :favorite_food
#   def initialize(first_name, last_name, age, favorite_food)
#     @first_name = first_name
#     @last_name = last_name
#     @age = age
#     @favorite_food = favorite_food
#   end
# end
# new_student = Student.new(:first_name, :last_name, :age, :favorite_food)
# new_student.first_name = "Bob"
# new_student.last_name = "Portman"
# new_student.age = "22"
# new_student.favorite_food = "Aligator"
# p new_student.first_name
# p new_student.last_name
# p new_student.age
# p new_student.favorite_food

# class Car
#     def self.promote
#         puts "Cars are cool!"
#     end
#     def vroom
#         puts "Vroom Vroom"
#     end
# end
# Car.promote
# new_car = Car.new
# new_car.vroom

# class GameEntity
#     attr_accessor :name, :hitpoints, :attack_dmg
#     def initialize(name, hitpoints, attack_dmg)
#         @name = name
#         @hitpoints = hitpoints
#         @attack_dmg = attack_dmg
#     end
# end
# class Player < GameEntity
#     def attack
#         puts "You take #{@attack_dmg} damage!"
#     end
# end
# class Ogre < GameEntity
#     def initialize(hitpoints, attack_dmg)
#         @name = "Zum"
#         @hitpoints = hitpoints
#         @attack_dmg = attack_dmg
#     end
# end
# player1 = Player.new("Joe", 100, 9999)
# ogre1 = Ogre.new(10, 1)
# puts player1
# puts ogre1
# player1.attack

# class Card
#     attr_accessor :value
#     def initialize(value)
#         @value = value
#     end
# end
# class FaceCard < Card
#   def initialize(value)
#       @value = "10"
#     end
# end
# class AceCard < Card
#   def initialize(value)
#       @value = "11"
#     end
# end
# Face = FaceCard.new(@value)
# puts Face
# puts Face.value
# Ace = AceCard.new(@value)
# puts Ace
# puts Ace.value
=======
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

puts ogre2
>>>>>>> 5853a3f9a3a9b3ae1294f5892f3b7215cc9cdcb8
