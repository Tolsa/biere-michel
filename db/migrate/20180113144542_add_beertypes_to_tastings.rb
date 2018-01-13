class AddBeertypesToTastings < ActiveRecord::Migration[5.1]
  def change
    add_column :tastings, :ambree, :boolean
    add_column :tastings, :ipa, :boolean
    add_column :tastings, :surprise, :boolean
    add_column :tastings, :blonde, :boolean
  end
end
