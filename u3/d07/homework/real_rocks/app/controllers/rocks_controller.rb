class RocksController < ApplicationController
  def index
    @rocks = Rock.all
  end
  def show
    @rock = Rock.find(params[:id])
  end
  def edit
    @rock = Rock.find(params[:id])
  end
  def update
    @rock = params['@rock']
    rockparams = params.require(:rock).permit(:name, :description)
    Rock.update(params[:id],rockparams)
    redirect_to rocks_path
  end
  def destroy
    Rock.destroy(params[:id])
    redirect_to rocks_path
  end
  def new
    @rock = Rock.new
  end
  def create
    rock_params = params.require(:rock).permit(:name, :description)
    @rock = Rock.new(rock_params)
    @rock.save
    redirect_to rocks_path
  end
end
