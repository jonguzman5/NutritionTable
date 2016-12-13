
# 2.
people_one = [53, 28, 17, 87, 62, 12, 31, 9]
people_two = [13, 45, 67, 76, 50, 29, 18, 21]

over_eighteen = people_one.select { |age| age > 18 }

under_eighteen = people_one.reject do |age|
  age > 18
end

puts "over eighteen #{over_eighteen}"
puts "under eighteen #{under_eighteen}"

# 3.

# def doSomeMath pass_a_proc, a, b
#   pass_a_proc.call(a,b)
# end
#
# doSomeMath(add, 1, 52)
# doSomeMath(multiply, 5, 2)


# 4.
