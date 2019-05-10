class User < ApplicationRecord
	has_secure_password

	has_many :jokes, :foreign_key => 'author_id'
	has_many :messages, :foreign_key => 'from_id'
	has_many :joke_comments, :class_name => 'JokeComment', :foreign_key => 'user_id'

	has_one :bio, :foreign_key => 'user_id'
	has_one :inbox, :foreign_key => 'user_id'

	#validates :name, uniqueness: true
	validates :email, uniqueness: true

	has_many :user_colors, :class_name => 'UserColor', :foreign_key => 'user_id'
	has_many :colors, through: :user_colors
	has_many :user_palettes, :class_name => 'UserPalette', :foreign_key => 'user_id'
	has_many :palettes, through: :user_palettes
end
