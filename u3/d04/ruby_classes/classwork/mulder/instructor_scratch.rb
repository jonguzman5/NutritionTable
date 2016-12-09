# class King
#     def value
#         10
#     end

#     def suit
#         "heart"
#     end
# end

# king_of_hearts = King.new

# puts king_of_hearts
# puts king_of_hearts.suit
# puts king_of_hearts.value


# class Dog
#   def breed
#     puts "here comes my breed:"
#     "Shiba Inu"
#   end

#   def name
#     "Carrie"
#   end

#   def nickname
#     "Cuckoo Bear"
#   end

#   def bark1
#     puts "Bark Bark Bark!"
#   end

#   def bark2
#     puts "Shriek howl!"
#   end
# end

# carrie = Dog.new
# carrie.name =  "Spot"
# p carrie
# puts carrie.breed
# puts carrie.name
# puts carrie.nickname
# carrie.bark1
# carrie.bark2


# class Dog2
#   def name=(value)
#     @name = value;
#   end

#   def name
#     @name
#   end
# end

# carrie = Dog2.new
# carrie.name = "The Magical Carrie Dog"
# puts carrie.name



# class Dog3
#     attr_accessor :breed, :name, :nickname, :bark1, :bark2
#     # there's also just attr_reader for getters & attr_writer for setters
#     #attr_accessor gives you both!
# end

# carrie = Dog3.new
# carrie.breed = "moose"
# carrie.name = "mooseDoge"
# carrie.nickname = "DestroyerOfWorlds"
# carrie.bark1 = "Murderous Skies"
# carrie.bark2 = "The End Is Nigh"

# puts carrie.nickname


# class Dog
#     attr_accessor :name, :nickname, :breed
#     attr_reader :bark1, :bark2

#     def initialize(name, nickname, breed, bark1)
#         # @name = name
#         @nickname = nickname
#         @breed = breed
#         @bark1 = bark1
#         @bark2 = "whats up"
#     end


# end

# my_dog = Dog.new("Carrie", "Cuckoo Bear", "Shiba Inu", "woof flarm")

# p "classLevelName:"
# p Dog.classLevelName
# p Dog.otherWay

# my_dog.bark1 = "bloorgh"

# p my_dog.bark1

# p my_dog

# p my_dog.name
# p my_dog.nickname
# p my_dog.breed

# p my_dog.bark1
# p my_dog.bark2



# ==================================================

# class Dog
#   attr_accessor = :name, :breed
#   @totalDogs = 0;

#   def self.incrementDogs()
#     @totalDogs += 1;
#   end

#   def self.totalDogs
#     @totalDogs
#   end

#   def initialize (name, breed)
#     @name = name
#     @breed = breed
#     Dog.incrementDogs
#   end
 
# end

# fido = Dog.new("fido", "german shepard")
# fido2 = Dog.new("another fido", "german shepard")

# p Dog.totalDogs

# class InsideOut
#   attr_accessor :stuff

#   def initialize(stuff)
#     @stuff = stuff
#   end
  
#   def twist 
#     [self]
#   end
# end

# x = InsideOut.new "start"

# p x.twist


# class Thing
#   @stuff = "stuff1"
#   def self.giveStuff
#     # @stuff
#     @stuff
#   end

#   def instanceStuff
#     @stuff
#   end
# end

# newThing = Thing.new
# p Thing.giveStuff
# p newThing.instanceStuff


# class Dog
#   attr_accessor :numberOfHeads
#   @@totalDogs = 0;
  
#   def initialize (numberOfHeads)
#     ##Dog.incrementDogs
#     @@totalDogs += 1;
#     @numberOfHeads = numberOfHeads
#   end
  
#   def self.totalDogs
#     @@totalDogs
#   end
  
# end

# ourDog = Dog.new(3)
# theirDog = Dog.new(18)

# p Dog.totalDogs

# p ourDog.numberOfHeads

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


# class A
#   attr_accessor :a, :b
#   def initialize
#     @a = "super a"
#     @b = "super b"
#   end 
# end

# class B < A
#   attr_accessor :b
# end

# class C < B
#   attr_accessor :c
# end

# cInst = C.new

# #cInst.c = "hi"
# # cInst.b = "there"
# p cInst.c
# p cInst.b

  






