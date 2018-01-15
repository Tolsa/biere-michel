class RemoveAddressFromBeers < ActiveRecord::Migration[5.1]
  def change
    remove_column :beers, :address, :string
    remove_column :beers, :latitude, :float
    remove_column :beers, :longitude, :float
  end
end
