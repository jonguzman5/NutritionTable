![](http://image.slidesharecdn.com/opalanewhope-131110115628-phpapp02/95/opal-a-newhope-43-638.jpg?cb=1387903624)

# YAY RUBY!


## Introduction
Ruby is a high-level programming language, similar in some ways to Javascript.

Unlike Javascript, Ruby is purely object oriented. There are no functions in Ruby, only object methods.

Let's look at some more Ruby concepts!

## Setup
You are provided with a file called practice.rb. You can run this code by typing `ruby practice.rb` in the terminal.

## Assignment
For each problem below, read the code carefully and try to understand what it is doing before you run it. Many of these concepts are the same as in Javascript, and you may find that Ruby is very easy to read!

Comments in ruby are created with the `#`. In `practice.rb`, remove the commented code for the problem you are working on before you run `ruby practice.rb in the terminal`.

For each problem - Did the code run as you expected? What are the similarities between javascript and ruby? What are the differences?

Feel free to look up the [documentation](http://ruby-doc.org/core-2.3.1/) if you want to learn more. We'll go over these at 10:00.

# 1
print "Hello World"
variable_declarations = "In ruby, we don't need to use the var keyword to assign variables!"
puts variable_declarations

#expected output: words printed

# 2
the_word = "Bird"

3.times do
  print the_word
end

print "#{the_word} is the word" #string interpulation

#expected output: bird bird bird
#                            bird is the word

# 3
h = { "n" => 100, "m" => 100, "y" => 300, "d" => 200, "a" => 0 }
h.shift

#expected output: a, d, y, m, n
#actual result: picks object keys in order from first to last + deletes them

# 4
CHANGE = "I am a constant!"
puts CHANGE

CHANGE = "If you try to change me, I'll throw a warning!"
puts CHANGE

#expected output: variable change's value will print, change will be overwritten later
#actual result: was changed though a warning was in fact seen

# 5
one = 2 - 1
apple = "apple"

if one > 0
  puts "numbers are truthy in both ruby and js"
end

#expected output: puts string will print

if apple
  puts "strings are truthy values in ruby, just like in js"
end

#expected output: puts string will print

if 1 == "1"
  puts "this won't print"
elsif 1 == one
  puts "scrict equalilty is done with 2 equal signs in ruby, rather than 3 in js!"
end

#expected output: elsif string will print

# 6
numbers = [1,2,3,4,5]
numbers.each do |number|
  puts number
end

#expected output: array will print downwards


# 7
numbers = [1,2,3,4,5]
doubles = numbers.map do |num|
  num * 2
end
puts doubles

#expected output: new array will be made with doubled numbers

# 8
numbers = [1,2,3,4,5]
evens = numbers.select do |num|
  num % 2 == 0
end
puts evens

#expected output: numbers divisible by two will print downwards


# 9
class DOG
  def bark
    puts "BARK!"
  end

  def bark_phrase(words)
    puts words
  end

  def no_parenthesis words
    puts words
  end

end

alfred = DOG.new #expected output: new dog created named alfred
                              #actual result: "#<DOG:0x007f89d920aa20>"
alfred.bark #expected output: prints "BARK!"
alfred.bark_phrase("In ruby, dogs can talk") #expected output: string will be printed
alfred.no_parenthesis "In ruby, humans don't need to use parenthesis all the time!" #expected output: string will be printed


# 10
list_of_numbers = (1..10).to_a
#expected output: 1-10 will be printed

puts "Tacocat".reverse
#expected output: tacocaT

puts "the list of numbers is: #{list_of_numbers.join ', '}"
#expected output: string + 1,2,3,4,5,6,7,8,9,10

puts list_of_numbers.reject! { |num| num % 2 == 0 }
puts list_of_numbers
#expected output: prints numbers that are not divisible by 2

hashling = { "a" => 100, "b" => 200 }
puts hashling.each {|key, value| puts "#{key} is #{value}" }
#expected output: a=100
#                            b=200

h = { "a" => 100, "b" => 200 }
h.fetch("z", "not found")
#expected output: searches then prints string "z not found"
#actual result: "not found" string is printed

