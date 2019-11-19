module Activation 
  extend ActiveSupport::Concern

  included do
    has_many :activities, :as => :activation
  end
end