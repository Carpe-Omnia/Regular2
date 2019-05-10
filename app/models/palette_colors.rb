class PaletteColor < ApplicationRecord
	belongs_to :color, :foreign_key => 'color_id'
	belongs_to :palette, :foreign_key => 'palette_id'
end 
