class AddCoordfloatToVoter < ActiveRecord::Migration[5.2]
  def change
    change_column :voters, :lat, :float
    change_column :voters, :lng, :float
  end
end
