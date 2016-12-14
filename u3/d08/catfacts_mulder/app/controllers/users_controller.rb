class UsersController < ApplicationController
  def index
  end

  def create
    email_add = params['user']['email']
    CatfactsMailer.catfacts_welcome(email_add).deliver
    redirect_to(:back)
  end
end
