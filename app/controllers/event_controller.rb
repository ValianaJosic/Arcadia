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
          @Event = Event.new(Event_params)

        Event.create(
            user: c.user,
            activity_date: Faker::Date.between(from: 2.weeks.from_now, to: 2.months.from_now),
            notes: Faker::Lorem.sentences,
            eventable_type: 'Contact',
            eventable_id: c.id
        )
        
          if @Event.save
            redirect_to @Event
          else
            render 'new'
          end
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
        
          redirect_to Events_path
        end
        
        private
          def Event_params
            params.require(:Event).permit(:title, :text)
          end

end
