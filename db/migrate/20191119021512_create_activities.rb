class CreateActivities < ActiveRecord::Migration[6.0]
  def change
    create_table :activities do |t|
      t.references  :user
      t.datetime    "activity_date", null: false
      t.text        "notes"

      t.timestamps
    end
  end
end
