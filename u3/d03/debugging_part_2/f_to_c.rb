module Debugging
  # read the error
  # think about the error
  # use debugging tools
  # google the error

  require "byebug"

  class TemperatureCalculator
    def get_degrees_c degrees_f
      offset = 32
      factor = 5.0/9
      result = factor * (degrees_f - offset)
      puts result
    end
  end

  my_temp_calc = TemperatureCalculator.new
  my_temp_calc.get_degrees_c 212

end # ends module
