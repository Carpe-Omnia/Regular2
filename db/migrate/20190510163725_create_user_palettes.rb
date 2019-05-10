class CreateUserPalettes < ActiveRecord::Migration[5.2]
  def change
    create_table :user_palettes do |t|
      t.integer :user_id
      t.integer :palette_id
    end
  end
end
