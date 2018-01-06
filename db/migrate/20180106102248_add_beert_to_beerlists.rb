class AddBeertToBeerlists < ActiveRecord::Migration[5.1]
  def change
    add_column :beerlists, :beer_id, :integer
    add_column :beerlists, :tasting_id, :integer
  end
end
