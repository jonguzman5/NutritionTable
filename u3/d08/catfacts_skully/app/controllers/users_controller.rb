class UsersController < ApplicationController
  def index
  end

  def create
    email_address = params['user']['email']
    CatfactsMailer.catfacts_welcome(email_address).deliver
    redirect_to(:back)
  end
end
