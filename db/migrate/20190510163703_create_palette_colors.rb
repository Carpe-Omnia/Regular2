class CreatePaletteColors < ActiveRecord::Migration[5.2]
  def change
    create_table :palette_colors do |t|
      t.integer :palette_id
      t.integer :color_id
    end
  end
end
