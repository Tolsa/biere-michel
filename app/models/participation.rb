class Participation < ApplicationRecord
  belongs_to :guest, inverse_of: :participations
  belongs_to :tasting

end
