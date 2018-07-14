class RemoveNameFromContacts < ActiveRecord::Migration[5.1]
  def change
    remove_column :contacts, :name, :string
    remove_column :contacts, :message, :string
  end
end
