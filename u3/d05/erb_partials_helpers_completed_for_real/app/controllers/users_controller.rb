class UsersController < ApplicationController

	# first
	def index
		@users = User.all	
	end
	# first

	def show
		@user = User.find_by(id: params[:id])
		
	end

	def create
		User.create(first_name: params[:first],
							 	last_name: params[:last],
							 	age: params[:age],
							 	email: params[:email])
		redirect_to "/users"
	end

	def destroy
		User.destroy(params[:id])
		redirect_to "/users"
	end
end
