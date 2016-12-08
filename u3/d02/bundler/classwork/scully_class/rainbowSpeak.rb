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


def rainbowSpeak2(sentence)
        colors = String.colors
	randNum = 0
	previousRandNum = 0

        sentence = sentence.split('')
        sentence.map { |letter|
          while (randNum == previousRandNum)
            randNum = rand(0..colors.length)
          end
          previousRandNum = randNum;
          letter.colorize(colors[randNum]);
        }.join('')
end

# Here's a version using lazy Enumerators (see
# http://ruby-doc.org/core-2.2.0/Enumerator/Lazy.html).
# This implementation draws from the following blog post:
# https://rossta.net/blog/infinite-sequences-in-ruby.html

def rainbowSpeak3(sentence)
  sentence.split('').lazy
    .zip(
      Enumerator.new {|y| loop do y.yield rand(0..5) end}.lazy
      .chunk {|n| n} 
      .map {|chunk| chunk.first}
      .map {|n| String.colors[n]}
    )
    .map{|(letter, color)| letter.colorize(color)}
    .to_a
    .join('')
end

# not sure what this does
system("clear")

puts rainbowSpeak3("Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. ")
