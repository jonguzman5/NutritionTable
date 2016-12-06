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


``` ruby
# 1
print "Hello World"
variable_declarations = "In ruby, we don't need to use the var keyword to assign variables!"
puts variable_declarations



# 2
the_word = "Bird"

3.times do
  print the_word
end

print "#{the_word} is the word"



# 3
h = { "n" => 100, "m" => 100, "y" => 300, "d" => 200, "a" => 0 }
h.shift




# 4
CHANGE = "I am a constant!"
puts CHANGE

CHANGE = "If you try to change me, I'll throw a warning!"
puts CHANGE




# 5
one = 2 - 1
apple = "apple"

if one > 0
  puts "numbers are truthy in both ruby and js"
end

if apple
  puts "strings are truthy values in ruby, just like in js"
end

if 1 == "1"
  puts "this won't print"
elsif 1 == one
  puts "scrict equalilty is done with 2 equal signs in ruby, rather than 3 in js!"
end



# 6
numbers = [1,2,3,4,5]
numbers.each do |number|
  puts number
end




# 7
numbers = [1,2,3,4,5]
doubles = numbers.map do |num|
  num * 2
end
puts doubles




# 8
numbers = [1,2,3,4,5]
evens = numbers.select do |num|
  num % 2 == 0
end
puts evens



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

alfred = DOG.new
alfred.bark
alfred.bark_phrase("In ruby, dogs can talk")
alfred.no_parenthesis "In ruby, humans don't need to use parenthesis all the time!"




# 10
list_of_numbers = (1..10).to_a

puts "Tacocat".reverse

puts "the list of numbers is: #{list_of_numbers.join ', '}"

puts list_of_numbers.reject! { |num| num % 2 == 0 }
puts list_of_numbers

hashling = { "a" => 100, "b" => 200 }
puts hashling.each {|key, value| puts "#{key} is #{value}" }

h = { "a" => 100, "b" => 200 }
h.fetch("z", "not found")

```
