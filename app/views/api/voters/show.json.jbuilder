json.partial! "api/voters/voter", voter: @voter

  json.set! 'voter' do
    json.partial! "api/voters/voter", voter: @voter
  end
