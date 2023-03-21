class AddAddressInfoToRamenShops < ActiveRecord::Migration[7.0]
  def change
    add_column :ramen_shops, :latitude, :float
    add_column :ramen_shops, :longitude, :float
  end
end
