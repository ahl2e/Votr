class AddCoordsToVoter < ActiveRecord::Migration[5.2]
  def change
    add_column :voters, :lat, :integer
    add_column :voters, :lng, :integer
  end
end
