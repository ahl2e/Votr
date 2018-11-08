class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :session_token
      t.string :email
      t.boolean :admin, :default => false
      t.string :timestamps
    end
  end
end
