class GuestsController < ApplicationController
  def index
    @guests = Guest.all
  end

  def create
    @guest = Guest.new(guest_params)
    if @guest.save
      redirect_to guests_path
    else
      render :new
    end
  end

  def destroy
    @guest = Guest.find(params[:id])
    @guest.destroy
  end

  def show
    @guest = Guest.find(params[:id])
  end

  def edit
    @guest = Guest.find(params[:id])
  end

  def new
    @guest = Guest.new
  end

  def update
    @guest = Guest.find(params[:id])
    if @guest.update(guest_params)
      redirect_to guest_path(@guest)
    else
      render :new
    end
  end

  private

  def guest_params
    params.require(:guest).permit(:firstname, :lastname)
  end
end
