class AddCoordinatesToBrasseries < ActiveRecord::Migration[5.1]
  def change
    add_column :brasseries, :latitude, :float
    add_column :brasseries, :longitude, :float
  end
end
