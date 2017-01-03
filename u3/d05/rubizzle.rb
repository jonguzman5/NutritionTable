class Cars
  attr_accessor :make, :model, :year, :color, :miles
  def initialize(make, model, year, color)
    @make = make
    @model = model
    @year = year
    @color = color
    @miles = 0
  end
  def seen_another_year
    @miles += 15000
  end
  def details
    msg = "This #{@year} #{@make} #{@model} has #{@miles} miles on it"
    addmsg = ", and that blue paint is really fading"
    if @miles <= 50000
      p msg
    else
      puts mgs + addmsg
    end
    #CONDENSED VERSION: puts @miles <= 50000 ? msg : msg + addmsg
  end
  def new_fresh_paint(new_color)
    @color = new_color
      ahh_fresh_paint
  end
  def ahh_fresh_paint
    "The new #{@color} color was a good choice"
  end
end

car1 = Cars.new("Toyota", "Camry", "2017", "Red")
p car1
# car1.make = "Toyota"
# car1.model = "Prius"
# car1.year = "2015"
# car1.color = "Hot Pink"
# car1.miles
# car1.seen_another_year
# p car1.details
# p car1.ahh_fresh_paint
