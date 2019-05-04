class AddTimestampsToJokes < ActiveRecord::Migration[5.2]
  def change
    add_column :jokes, :created_at, :datetime, null: false
    add_column :jokes, :updated_at, :datetime, null: false
  end
end
