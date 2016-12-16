class TopicsController < ApplicationController
  def index
    @topics = Topic.all
    @topic = Topic.new
  end
  def show
    @topic = Topic.find_by(id: params[:id])
  end
  def create
    topic_params = params.require(:topic).permit(:title, :content, :user_id, :created_at, :updated_at)
    @topic = Topic.new(topic_params)
    @topic.save
    redirect_to topics_path
  end
end
