class CreateBeerlists < ActiveRecord::Migration[5.1]
  def change
    create_table :beerlists do |t|

      t.timestamps
    end
  end
end
