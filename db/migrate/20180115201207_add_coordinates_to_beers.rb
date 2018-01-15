class AddCoordinatesToBeers < ActiveRecord::Migration[5.1]
  def change
    add_column :beers, :latitude, :float
    add_column :beers, :longitude, :float
  end
end
