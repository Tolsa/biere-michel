class Guest < ApplicationRecord
  has_many :tastings, through: :participations, inverse_of: :guest
  has_many :participations

  validates :firstname, presence: true, uniqueness: { scope: :lastname }
  validates :lastname, presence: true
  validates :email, presence: true, uniqueness: true, format: { with: /\A(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\z/, message: "merci de rentrer un email correct"}

  accepts_nested_attributes_for :participations, allow_destroy: true
end
