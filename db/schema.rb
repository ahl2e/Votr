# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_04_03_193648) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "lists", force: :cascade do |t|
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "session_token"
    t.string "email"
    t.boolean "admin", default: false
    t.string "timestamps"
  end

  create_table "voters", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "address", null: false
    t.string "apartment_number"
    t.string "city"
    t.string "state"
    t.integer "zip", null: false
    t.integer "age"
    t.boolean "can_share_contact_info"
    t.integer "phone_number"
    t.string "email"
    t.integer "list_id"
    t.integer "contact_attempts"
    t.integer "enthusiasm"
    t.string "poll_location_name", null: false
    t.string "poll_location_address", null: false
    t.string "poll_location_city", null: false
    t.string "poll_location_state", null: false
    t.boolean "sign_requested"
    t.boolean "sign_delivered"
    t.boolean "do_not_contact"
    t.text "notes", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "lat"
    t.float "lng"
    t.index ["list_id"], name: "index_voters_on_list_id", unique: true
  end

end
