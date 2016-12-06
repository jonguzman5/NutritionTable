# coding: utf-8
require 'colorize'
#require 'pry'

# puts "This is blue".colorize(:blue)

def rainbowSpeak1(sentence)
	randNum = 0
	previousRandNum = 0
	letterArr = []

	sentence = sentence.split('')

	sentence.each do |letter|
		while (randNum == previousRandNum)
			randNum = rand(1...7) 
		end

		case randNum
		when 1
			letterArr.push(letter.colorize(:red))
		when 2
			letterArr.push(letter.colorize(:green))
		when 3
			letterArr.push(letter.colorize(:yellow))
		when 4
			letterArr.push(letter.colorize(:blue))
		when 5
			letterArr.push(letter.colorize(:magenta))
		when 6
			letterArr.push(letter.colorize(:cyan))
		when 7
			letterArr.push(letter.colorize(:white))
		end
	
		previousRandNum = randNum
	end
	return letterArr.join("")
end


def rainbowSpeak3(sentence)
        colors = [:red, :green, :yellow, :blue, :magenta, :cyan, :white];
	letterArr = []

	randNum = 0
	previousRandNum = 0

        sentence = sentence.split('')
        sentence.map { |letter|
          while (randNum == previousRandNum)
            randNum = rand(0..6)
          end
          previousRandNum = randNum;
          letter.colorize(colors[randNum]);
        }.join('')
end

#system("clear")

puts rainbowSpeak3("Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. ")
