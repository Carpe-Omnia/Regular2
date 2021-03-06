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

ActiveRecord::Schema.define(version: 2019_05_10_163725) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bios", force: :cascade do |t|
    t.string "user_id"
    t.string "headline"
    t.text "content"
  end

  create_table "colors", force: :cascade do |t|
    t.string "name"
    t.string "rgb"
    t.string "hex"
    t.string "pms"
    t.string "cmyk"
    t.string "karma"
    t.string "integer"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "conversations", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "conversations_inboxes", id: false, force: :cascade do |t|
    t.bigint "conversation_id", null: false
    t.bigint "inbox_id", null: false
  end

  create_table "inboxes", force: :cascade do |t|
    t.string "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "user_name"
  end

  create_table "joke_comments", force: :cascade do |t|
    t.string "user_name"
    t.string "user_id"
    t.integer "karma"
    t.text "content"
    t.string "joke_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "jokes", force: :cascade do |t|
    t.string "setup"
    t.string "punchline"
    t.integer "karma"
    t.string "author_id"
    t.string "user_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "comment_count"
  end

  create_table "messages", force: :cascade do |t|
    t.string "subject"
    t.text "content"
    t.string "from_id"
    t.string "to_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "conversation_id"
    t.string "user_name"
  end

  create_table "palette_colors", force: :cascade do |t|
    t.integer "palette_id"
    t.integer "color_id"
  end

  create_table "palettes", force: :cascade do |t|
    t.string "name"
  end

  create_table "signs", force: :cascade do |t|
    t.string "address"
    t.string "name"
    t.string "delivery"
    t.string "lng"
    t.string "lat"
  end

  create_table "user_colors", force: :cascade do |t|
    t.integer "user_id"
    t.integer "color_id"
  end

  create_table "user_palettes", force: :cascade do |t|
    t.integer "user_id"
    t.integer "palette_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.text "password_digest"
    t.integer "karma"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "inbox_id"
  end

end
