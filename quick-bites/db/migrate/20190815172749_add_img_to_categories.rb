class AddImgToCategories < ActiveRecord::Migration[5.2]
  def change
    add_column :categories, :img, :string
  end
end
