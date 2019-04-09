class CreateTurf < ActiveRecord::Migration[5.2]
  def change
    create_table :turfs do |t|
    drop_table :lists
     end
  end
end
