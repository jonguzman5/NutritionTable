class CatfactsMailer < ApplicationMailer 
  default from: "catfactsemailsample@gmail.com"

  def catfacts_welcome(email)
    @email = email 
    puts "ATTEMPTING TO SEND MAIL"
    mail(to: @email, subject: "Welcome to CatFacts!")
  end

end 