# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string
#  password_digest :string
#  session_token   :string
#  email           :string
#  admin           :boolean          default(FALSE)
#  timestamps      :string
#

class User < ApplicationRecord

end
