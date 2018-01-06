class CreateTastings < ActiveRecord::Migration[5.1]
  def change
    create_table :tastings do |t|
      t.date :date
      t.integer :capacity

      t.timestamps
    end
  end
end
