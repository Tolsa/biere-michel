class CreateTastings < ActiveRecord::Migration[5.1]
  def change
    create_table :tastings do |t|
      t.date :date
      t.integer :capacity
      t.references :beerlist, foreign_key: true
      t.references :guestlist, foreign_key: true

      t.timestamps
    end
  end
end
