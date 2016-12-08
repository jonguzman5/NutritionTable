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
