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
  def destroy
    @cheese = Cheese.find(params[:id])
    @cheese.destroy
    redirect_to cheeses_path
  end
  def edit
    @cheese = Cheese.find(params[:id])
  end
  def update
    cheese_params = params.require(:cheese).permit(:name, :description, :milk_type, :image_url)
    @cheese = Cheese.update(cheese_params)
    redirect_to cheese_path
  end
end
