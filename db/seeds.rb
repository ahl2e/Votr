# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
user1 = User.create!({ username: 'Adam615', password: 'password', email: 'adamlong1066@gmail.com' })
demo = User.create!({username: 'demo', password: 'demopassword', email: 'demo@gmail.com'})

Voter.delete_all
adam = Voter.create!({
  first_name: 'Adam',
  last_name: "Long",
  address: '313 St Marks ave',
  apartment_number: '1M',
  city: 'Brooklyn',
  state: 'New York',
  zip: 11238,
  age: 30,
  list_id: nil,
  can_share_contact_info: true,
  phone_number: 6154186621,
  email: 'adamlong1066@gmail.com',
  contact_attempts: 0,
  enthusiasm: 7,
  poll_location_name:'PS 9 New',
  poll_location_address: '80 Underhill Ave',
  poll_location_city: 'Brooklyn',
  poll_location_state: 'NY',
  sign_requested: false,
  sign_delivered: false,
  do_not_contact: false,
  notes: []
  })
julia = Voter.create!({
  first_name: 'Julia',
  last_name: "Long",
  address: '313 St Marks ave',
  apartment_number: '1M',
  city: 'Brooklyn',
  state: 'New York',
  zip: 11238,
  age: 29,
  list_id: nil,
  can_share_contact_info: false,
  phone_number: 5164570495,
  email: 'adamlong1066@gmail.com',
  contact_attempts: 0,
  enthusiasm: 4,
  poll_location_name:'PS 9 New',
  poll_location_address: '80 Underhill Ave',
  poll_location_city: 'Brooklyn',
  poll_location_state: 'NY',
  sign_requested: false,
  sign_delivered: false,
  do_not_contact: false,
  notes: []
  })


  List.delete_all
  list1 = List.create!()
