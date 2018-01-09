class AddOpenToTastings < ActiveRecord::Migration[5.1]
  def change
    add_column :tastings, :open, :boolean
  end
end
