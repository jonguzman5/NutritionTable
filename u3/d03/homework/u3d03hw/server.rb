module Sinatra
  class Server < Sinatra::Base
compliments = [
  "People behind you in class think you are the perfect height.",
  "Your instructors think you're amazing.",
  "Your posture during breaks effectively masks your exhaustion.",
  "Your commit messages are an inspiration to us all",
  "Your fingers are magic on the keys",
  "You are the moon of my life...my sun and stars"
]
    get "/" do
    randomcompliment = compliments.sample
    @compliment = randomcompliment
    @color = Faker::Color.hex_color
    @color2 = Faker::Color.hex_color
    @color3 = Faker::Color.hex_color
    @color4 = Faker::Color.hex_color
    @color5 = Faker::Color.hex_color
    @color6 = Faker::Color.hex_color
      erb :index
    end
    get "/:name" do
      @name = params[:name]
      erb :index
    end



  end
end

