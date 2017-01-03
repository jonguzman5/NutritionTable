people_one = [53, 28, 17, 87, 62, 12, 31, 9]
filter = Proc.new { |age| age > 18 }
over_eighteen = people_one.select(&filter)
under_eighteen = people_one.reject(&filter)
puts "over eighteen #{over_eighteen}"
puts "under eighteen  #{under_eighteen}"

add = Proc.new {|a, b| puts a+b}
multiply = Proc.new {|x, y| puts x*y }
def doSomeMath pass_a_proc, a, b
  pass_a_proc.call(a,b)
end
doSomeMath(add, 1, 52)
doSomeMath(multiply, 5, 2)

def is_it_even(n)
   yield(n) #p can go before this #parenthesis optional
end

truth = Proc.new{|n| n.even?} #p can go after param #alternative: %2 === 0

p is_it_even 5, &truth #p can go above
