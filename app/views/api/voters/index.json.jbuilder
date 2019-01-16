@voters.each do |voter|
  json.set! voter.id do
    json.extract! voter, :id, :first_name, :last_name, :email, :address, :city, :state, :zip, :enthusiasm, :poll_location_name, :poll_location_address, :poll_location_city, :poll_location_state, :sign_requested, :sign_delivered, :do_not_contact, :notes, :contact_attempts
  end

end
