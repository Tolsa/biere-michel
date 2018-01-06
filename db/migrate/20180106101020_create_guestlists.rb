class CreateGuestlists < ActiveRecord::Migration[5.1]
  def change
    create_table :guestlists do |t|

      t.timestamps
    end
  end
end
