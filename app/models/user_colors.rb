class UserColor < ApplicationRecord
	belongs_to :user, :foreign_key => 'user_id'
	belongs_to :color, :foreign_key => 'color_id'
end 
