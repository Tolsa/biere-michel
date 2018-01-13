class GuestsController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    @guests = Guest.all
  end

  def create
    @guest = Guest.new(guest_params)
    @guest.save
    @participation = Participation.new
    @participation.guest_id = params["guest"]["participations_attributes"]["0"]["guest_id"]
    @participation.tasting_id = params["guest"]["participations_attributes"]["0"]["tasting_id"]
    if @participation.save && @guest.save
      redirect_to root_path
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
      redirect_to root_path
    else
      render :new
    end
  end

  private

  def guest_params
    params.require(:guest).permit(:firstname, :lastname, :email, :participation_attributes => [:id, :guest_id, :tasting_id])
  end

end
