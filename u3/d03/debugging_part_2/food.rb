require byebug

class food
  def editable
    response = true
    puts "editable? - ${response}"
  end
end

class HotFood < Food
  def temp
    puts "hot"
  end
end

class Array
  def saythings
    self.each |x|
      puts x
    end
end

Food.editable

[1,3,4].saythings


