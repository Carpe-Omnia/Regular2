class Palette < ApplicationRecord
  has_many :palette_colors, :foreign_key => 'palette_id'
  has_many :colors, through: :palette_colors

  has_many :user_palettes, :class_name => 'UserPalette', :foreign_key => 'palette_id'
  has_many :users, through: :user_palettes

  def self.clear_garbage
    self.all.each do |palette|
      if palette.users.length == 0
        palette.destroy
      end
    end
  end

        
end
