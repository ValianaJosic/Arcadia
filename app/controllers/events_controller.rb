class EventsController < ApplicationController

  def index
    @event = current_user.events.all
    respond_to do |format|
      format.html
      format.json do
        events = current_user
                  .events
        render json: events 
      end
    end
  end

  def create
    d = params[:date]
    t = params[:time]
    event = Event.create(
        user:           current_user,
        activity_date:  (d + ' ' + t).to_datetime.strftime("%Y-%m-%dT%H:%M:%S"),
        notes:          params[:notes],
        eventable_type: params[:type],
        eventable_id:   params[:name]
    )
  end

end
