class Prescription < ApplicationRecord

  belongs_to :user
  has_many :events, as: :eventable
  
end
