class AddAddressToBeers < ActiveRecord::Migration[5.1]
  def change
    add_column :beers, :address, :string
  end
end
