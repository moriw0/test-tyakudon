# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_03_24_113602) do
  create_table "ramen_shops", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "plate"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "latitude"
    t.float "longitude"
  end

  create_table "records", force: :cascade do |t|
    t.integer "ramen_shop_id", null: false
    t.datetime "start_at"
    t.datetime "stop_at"
    t.datetime "retire_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ramen_shop_id"], name: "index_records_on_ramen_shop_id"
  end

  add_foreign_key "records", "ramen_shops"
end
