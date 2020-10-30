# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_30_030825) do

  create_table "animals", force: :cascade do |t|
    t.string "name"
    t.string "phylum"
    t.string "order"
    t.string "species"
    t.integer "kingdom_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "kingdoms", force: :cascade do |t|
    t.string "name"
    t.string "body_form"
    t.string "mitochondria"
    t.string "cell_wall"
    t.string "nutrition"
    t.string "nervous_system"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
