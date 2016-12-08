module Sinatra
  class Server < Sinatra::Base
    get "/" do
      @response1 = "Who was the first man in space?"
      erb :index
    end
    get "/yuri_gagarin" do
      @response2 = "Correct. Who was the first man on the moon?"
      erb :yuri_gagarin
    end
    get "/neil_armstrong" do
      @response3 = "Correct. Which animal was the first to go into orbit? "
      erb :neil_armstrong
    end
    get "/dog" do
      @response4 = "Correct. What was the name of that animal? "
      erb :dog
    end
    get "/laika" do
      @response5 = "Correct. YOU WIN!"
      erb :laika
    end

    get "/name/:personname" do
      @personname = params[:personname]
      erb :name
    end

    get "/tea/:person1name/:person2name" do
      @person1name = params[:person1name]
      @person2name = params[:person2name]
      erb :tea
    end

    get "/battle/:person1name/:person2name" do
      @person1name = params[:person1name]
      @person2name = params[:person2name]
      erb :battle
    end

  end
end
