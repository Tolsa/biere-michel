class CreateParticipations < ActiveRecord::Migration[5.1]
  def change
    create_table :participations do |t|
      t.references :tasting, foreign_key: true
      t.references :guest, foreign_key: true

      t.timestamps
    end
  end
end
