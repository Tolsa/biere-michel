class ParticipationsController < ApplicationController
  def index
    @participations = Participation.all
  end

  def create
    @participation = Participation.new(participation_params)
    if @participation.save
      redirect_to root_path
      raise
    else
      render :new
    end
  end

  def destroy
    @participation = Participation.find(params[:id])
    @participation.destroy
    if @participation.destroy
      redirect_to root_path
    end
  end

  def show
    @participation = Participation.find(params[:id])
  end

  def new
    @participation = Participation.new
  end

  def update
    @participation = Participation.find(params[:id])
    if @participation.update(participation_params)
      redirect_to root_path
    else
      render :new
    end
  end

  private

  def participation_params
    params.require(:participation).permit(:guest_id, :tasting_attributes => [:id, :date])
  end
end
end
