class Guest < ApplicationRecord
  has_many :tastings, through: :participations, inverse_of: :guest
  has_many :participations

  validates :firstname, presence: true
  validates :lastname, presence: true
  validates :email, presence: true

  accepts_nested_attributes_for :participations, allow_destroy: true
end
