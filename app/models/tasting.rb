class Tasting < ApplicationRecord
  has_many :guests, through: :participations
end
