json.partial! "api/voters/voter", voter: @voter


json.voter do
  json.extract! @voter, ::id, :first_name, :last_name, :email, :address, :city, :state, :zip, :enthusiasm, :poll_location_name, :poll_location_address, :poll_location_city, :poll_location_state, :sign_requested, :sign_delivered, :do_not_contact, :notes
end
