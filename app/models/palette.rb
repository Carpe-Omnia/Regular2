class Palette < ApplicationRecord
  has_many :palette_colors, :foreign_key => 'palette_id'
  has_many :colors, through: :palette_colors
end
