class Prescription < ApplicationRecord

  belongs_to :user
  include Activation
end
