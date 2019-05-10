class Color < ApplicationRecord
  has_many :palette_colors, :class_name => 'PaletteColor' , :foreign_key => 'color_id'
  has_many :palettes, through: :palette_colors
end  
