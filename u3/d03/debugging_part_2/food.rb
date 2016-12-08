# require byebug

# class food
#   def editable
#     response = true
#     puts "editable? - ${response}"
#   end
# end

# class HotFood < Food
#   def temp
#     puts "hot"
#   end
# end

# class Array
#   def saythings
#     self.each |x|
#       puts x
#     end
# end

# Food.editable

# [1,3,4].saythings

require "byebug"

class Food
  def editable
    response = true
    puts "editable? - #{response}"
  end
end

class HotFood < Food
  def temp
    puts "hot"
  end
end

class Array
  def saythings
    self.each do |x|
      puts x
    end
  end
end

caserole = Food.new
caserole.editable

[1,3,4].saythings








