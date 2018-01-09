class Participation < ApplicationRecord
  belongs_to :tasting
  belongs_to :guest, inverse_of: :participations

end
