class Turf < ApplicationRecord

  has_many :voters,
  primary_key: :id,
  foreign_key: :voter_id,
  class_name: :Voter

end
