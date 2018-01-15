class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def home
    @participation = Participation.new
    @contact = Contact.new
    @guest = Guest.new

    @brasserie = Brasserie.where.not(latitude: nil, longitude: nil)
    @markers = @brasserie.map do |location|
      {
        lat: location.latitude,
        lng: location.longitude#,
        # infoWindow: { content: render_to_string(partial: "/locations/map_box", locals: { location: location }) }
      }
    end
  end

end
