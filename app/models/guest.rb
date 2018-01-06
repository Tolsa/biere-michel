class Guest < ApplicationRecord
  has_many :guests
  has_many :tastings
end
