class AddActivationToActivities < ActiveRecord::Migration[6.0]
  def change
    add_reference :activities, :activation, polymorphic: true, null: false
  end
end
