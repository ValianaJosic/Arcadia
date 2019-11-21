class EventController < ApplicationController

        def index
          @Event = Event.all
        end
        
        def show
          @Event = Event.find(params[:id])
        end
        
        def new
          @Event = Event.new
        end
 
        def edit
          @Event = Event.find(params[:id])
        end
        
        def create

            puts params
        
            # @Event = Event.new(params)

            Event.create(
                # user: user,
                activity_date: params[:event_date_time], 
                notes: params[:event_note],
                eventable_type: params[:event_type].to_s,
                eventable_id: 42, 
            )

            puts "Created #{Event.count} event(s) sucessfully."
        
        end
        
        def update
          @Event = Event.find(params[:id])
        
          if @Event.update(Event_params)
            redirect_to @Event
          else
            render 'new'
          end
        end
        
        def destroy
          @Event = Event.find(params[:id])
          @Event.destroy
        
          redirect_to events_path
        end
        
end
