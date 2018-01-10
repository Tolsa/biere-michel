class Tasting < ApplicationRecord
  has_many :guests, through: :participations, dependent: :destroy
  has_many :participations, dependent: :destroy
end
