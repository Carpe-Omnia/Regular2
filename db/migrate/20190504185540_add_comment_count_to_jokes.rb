class AddCommentCountToJokes < ActiveRecord::Migration[5.2]
  def change
    add_column :jokes, :comment_count, :integer
  end
end
