class UserPalette < ApplicationRecord
	belongs_to :user, :foreign_key => 'user_id'
	belongs_to :palette, :foreign_key => 'palette_id'
end
