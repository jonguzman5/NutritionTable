class CommentsController < ApplicationController
	def create
		Comment.create(text: params[:text],
							 	project_id: params[:project_id])
		redirect_to(:back)
	end

	def destroy
		Comment.destroy(params[:id])
		redirect_to(:back)
	end
end
