class Contact < ApplicationRecord
  validates :email, presence: true

  after_create :subscribe_to_newsletter

  private

  def subscribe_to_newsletter
    SubscribeToNewsletterService.new(self).call
  end
end
