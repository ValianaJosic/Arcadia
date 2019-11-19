class Contact < ApplicationRecord

  belongs_to :user
  include Activation
end
