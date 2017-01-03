class RubyRobot
 def introduce_yourself
  "Hi. I am Ruby Robot. Matz is nice, so then I am nice."
 end
 # def say_back(phrase)
 #  # phrase = "BOOP BLOOP BLIP BEEP!"
 #  phrase.upcase + "!" #or "#{phrase.upcase }!"
 # end
  def say_back(*args)
    # args.each do |phrase|
    #     phrase.upcase!
    # end
    # "#{args.join(" ")}!"
    "#{args.join(" ").upcase}!"
 end
end
