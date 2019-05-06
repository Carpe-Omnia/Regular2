class CreateColors < ActiveRecord::Migration[5.2]
  def change
    create_table :colors do |t|
      t.string :name
      t.string :rgb
      t.string :hex
      t.string :pms
      t.string :cmyk
      t.string :karma
      t.string :integer
      t.timestamps
    end
  end
end
