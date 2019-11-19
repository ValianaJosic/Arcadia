class Activity < ApplicationRecord

  belongs_to :activation, :polymorphic => true
  
end
