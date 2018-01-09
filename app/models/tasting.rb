class Tasting < ApplicationRecord
  has_many :guests, through: :participations
  has_many :participations
end
