class TastingsController < ApplicationController

  def index
    @tastings = Tasting.all
    @tasting = Tasting.new
  end

  def create
    @tasting = Tasting.new(tasting_params)
    if @tasting.save
      redirect_to tastings_path
    else
      render :new
    end
  end

  def destroy
    @tasting = Tasting.find(params[:id])
    @tasting.destroy
    if @tasting.destroy
      redirect_to tastings_path
    end
  end

  def show
    @tasting = Tasting.find(params[:id])
  end

  def edit
    @tasting = Tasting.find(params[:id])
  end

  def new
    @tasting = Tasting.new
  end

  def update
    @tasting = Tasting.find(params[:id])
    if @tasting.update(tasting_params)
      redirect_to tastings_path
    else
      render :new
    end
  end

  private

  def tasting_params
    params.require(:tasting).permit(:date, :capacity)
  end
end
