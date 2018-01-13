class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def home
    @participation = Participation.new
    @contact = Contact.new
    @guest = Guest.new
  end

end
