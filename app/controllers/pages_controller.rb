class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: :home

  def contact
  end

  def about
  end

  def home
    @participation = Participation.new
    @guest = Guest.new
  end

  def admin
  end
end
