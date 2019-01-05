class AddImageUrlAndIdToPlaces < ActiveRecord::Migration[5.2]
  def change
    add_column :places, :image_url, :string
    add_column :places, :place_id, :string
  end
end
