@voters.each do |voter|
  json.set! voter.id do
    json.extract! voter, :id, :first_name, :last_name
  end

end
