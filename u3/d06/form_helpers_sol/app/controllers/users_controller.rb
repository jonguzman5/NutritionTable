class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def create
    user = params['user']
    User.create(name: user['name'],
                email: user['email'],
                company: user['company'],
                feedback: user['feedback'])
    redirect_to(:back)
  end

  def destroy
    User.destroy(params['id'])
    redirect_to(:back)
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  def update
    user = params['user']
    User.update(params[:id],
                name: user['name'],
                email: user['email'],
                company: user['company'],
                feedback: user['feedback'])
    redirect_to(:back)
  end
end
