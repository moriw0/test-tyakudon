class CreateRecords < ActiveRecord::Migration[7.0]
  def change
    create_table :records do |t|
      t.references :ramen_shop, null: false, foreign_key: true
      t.datetime :start_at
      t.datetime :stop_at
      t.datetime :retire_at

      t.timestamps
    end
  end
end
