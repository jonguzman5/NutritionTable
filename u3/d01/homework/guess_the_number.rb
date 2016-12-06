SECRET_NUMBER = 7 #setting the value of 7 to a variable
guessed = false #essentially setting a rule

puts('I\'m thinking of a number between 1 and 10. Can you guess it?') #printing a string

while !guessed #while not guessed...
  guess = gets.chomp.to_i #this happens
  if SECRET_NUMBER == guess #if guess is equal to guess and is true
    guessed = true #var guessed is true
  else #if not...
    puts("#{guess}? Try again!") #print this message
  end #end of if statement
end #end of while loop

$stdout.puts('Great job!') #printed message
