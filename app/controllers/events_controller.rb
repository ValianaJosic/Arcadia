class EventsController < ApplicationController

  def index
  end

  def create
    d = params[:date]
    t = params[:time]
    Event.create(
        user:           current_user,
        activity_date:  (d + ' ' + t).to_datetime.strftime("%Y-%m-%dT%H:%M:%S"),
        notes:          params[:notes],
        eventable_type: params[:type],
        eventable_id:   params[:name]
    )
    puts '========================'
    puts 'Something was created, hopefully in the events table'
    puts '========================='
  end

end
