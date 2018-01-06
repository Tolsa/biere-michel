class AddGuestToGuestlists < ActiveRecord::Migration[5.1]
  def change
    add_column :guestlists, :guest_id, :integer
    add_column :guestlists, :tasting_id, :integer
  end
end
