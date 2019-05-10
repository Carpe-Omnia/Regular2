class CreateUserColors < ActiveRecord::Migration[5.2]
  def change
    create_table :user_colors do |t|
      t.integer :user_id
      t.integer :color_id
    end
  end
end
