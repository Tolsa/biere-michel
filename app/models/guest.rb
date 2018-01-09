class Guest < ApplicationRecord
  has_many :tastings, through: :participations, inverse_of: :guest
  has_many :participations

  accepts_nested_attributes_for :participations, allow_destroy: true
end
