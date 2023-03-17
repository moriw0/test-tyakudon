class CreateRamenShops < ActiveRecord::Migration[7.0]
  def change
    create_table :ramen_shops do |t|
      t.string :name
      t.string :address
      t.string :plate

      t.timestamps
    end
  end
end
