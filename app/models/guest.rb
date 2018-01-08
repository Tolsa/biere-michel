class Guest < ApplicationRecord
  has_many :tastings, through: :participations
end
