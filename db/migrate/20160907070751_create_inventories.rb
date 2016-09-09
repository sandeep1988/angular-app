class CreateInventories < ActiveRecord::Migration
  def change
    create_table :inventories do |t|
      t.integer :quantity
      t.float :total_price

      t.timestamps null: false
    end
  end
end
