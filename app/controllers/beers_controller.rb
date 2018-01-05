class BeersController < ApplicationController
  def index
    @beers = Beer.all
  end

  def create
    @beer = beer.new(beer_params)
    if @beer.save
      redirect_to beers_path
    else
      render :new
    end
  end

  def destroy
    @beer = Beer.find(params[:id])
    @beer.destroy
  end

  def show
    @beer = Beer.find(params[:id])
  end

  def edit
    @beer = Beer.find(params[:id])
  end

  def new
    @beer = Beer.new
  end

  def update
    @beer = Beer.find(params[:id])
    if @beer.update(beer_params)
      redirect_to beer_path(@beer)
    else
      render :new
    end
  end

  private

  def beer_params
    params.require(:beer).permit(:name, :type, :recipe, :grade)
  end

end
