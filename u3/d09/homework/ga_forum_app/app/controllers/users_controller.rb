class UsersController < ApplicationController

  def index
    @users = User.all
    @user = User.new
  end
  def show
    @user = User.find_by(id: params[:id])
  end
  def  create
    # User.create(name: params[:name],
    #   email: params[:email],
    #   course_id: params[:course_id])
    # redirect_to "/users"
    user_params = params.require(:user).permit(:name, :email, :course_id, :created_at, :updated_at)
    @user = User.new(user_params)
    @user.save
    redirect_to users_path
  end
end
