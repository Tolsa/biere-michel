class Brasserie < ApplicationRecord
  geocoded_by :address
  after_validation :geocode
end
