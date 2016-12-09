class ProjectsController < ApplicationController
	def create
		Project.create(name: params[:name],
								 	url: params[:url],
								 	user_id: params[:user_id])
		redirect_to(:back)
	end

	def destroy
		Project.destroy(params[:id])
		redirect_to(:back)
	end
end
