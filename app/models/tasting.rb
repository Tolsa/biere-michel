class Tasting < ApplicationRecord
  belongs_to :beerlist
  belongs_to :guestlist
end
