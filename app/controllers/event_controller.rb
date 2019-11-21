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
