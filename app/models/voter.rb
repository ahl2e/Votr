# == Schema Information
#
# Table name: voters
#
#  id                     :bigint(8)        not null, primary key
#  first_name             :string           not null
#  last_name              :string           not null
#  address                :string           not null
#  apartment_number       :string
#  city                   :string
#  state                  :string
#  zip                    :integer          not null
#  age                    :integer
#  can_share_contact_info :boolean
#  phone_number           :integer
#  email                  :string
#  list_id                :integer
#  contact_attempts       :integer
#  enthusiasm             :integer
#  poll_location_name     :string           not null
#  poll_location_address  :string           not null
#  poll_location_city     :string           not null
#  poll_location_state    :string           not null
#  sign_requested         :boolean
#  sign_delivered         :boolean
#  do_not_contact         :boolean
#  notes                  :text             default([]), is an Array
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#

class Voter < ApplicationRecord
  validates :first_name, :last_name, :address, :city, :state, :zip, :poll_location_name, :poll_location_address, :poll_location_city, :poll_location_state, presence: true

  belongs_to :list,
  primary_key: :id,
  foreign_key: :list_id,
  class_name: :List

end
