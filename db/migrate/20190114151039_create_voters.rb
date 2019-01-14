class CreateVoters < ActiveRecord::Migration[5.2]
  def change
    create_table :voters do |t|
      t.string :first_name, null:false
      t.string :last_name, null:false
      t.string :address, null:false
      t.string :apartment_number
      t.string :city
      t.string :state
      t.integer :zip, null:false
      t.integer :age
      t.boolean :can_share_contact_info
      t.integer :phone_number
      t.string :email
      t.integer :list_id
      t.integer :contact_attempts
      t.integer :enthusiasm
      t.string :poll_location_name, null:false
      t.string :poll_location_address, null:false
      t.string :poll_location_city, null:false
      t.string :poll_location_state, null:false
      t.boolean :sign_requested
      t.boolean :sign_delivered
      t.boolean :do_not_contact
      t.text :notes, array: true, default: []
      t.timestamps
    end
    add_index :voters, [:list_id ], unique:true
  end
end
