# == Schema Information
#
# Table name: lists
#
#  id :bigint(8)        not null, primary key
#

class List <ApplicationRecord

  has_many :voters,
  primary_key: :id,
  foreign_key: :voter_id,
  class_name: :Voter

end
