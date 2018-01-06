class Beerlist < ApplicationRecord
  has_many :beers
  has_many :tastings
end
