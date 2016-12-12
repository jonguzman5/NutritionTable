class CheesesController < ApplicationController
  def index
    @cheeses = Cheese.all
  end
  def show
    @cheese = Cheese.find(params[:id])
  end
  def new
    @cheese = Cheese.new
  end
  def create
    cheese_params = params.require(:cheese).permit(:name, :description, :milk_type, :image_url)
    @cheese = Cheese.new(cheese_params)
    @cheese.save
    redirect_to cheeses_path
  end
end
