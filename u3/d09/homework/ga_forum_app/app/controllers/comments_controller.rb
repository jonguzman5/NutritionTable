class CommentsController < ApplicationController
  def index
    @comments = Comment.all
    @comment = Comment.new
  end
  def show
    @comment = Comment.find_by(id: params[:id])
  end
  def create
    comment_params = params.require(:comment).permit(:content, :topic_id, :user_id, :created_at, :updated_at)
    @comment = Comment.new(comment_params)
    @comment.save
    redirect_to comments_path
  end
end
