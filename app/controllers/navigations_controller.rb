class NavigationsController < ApplicationController
    def index
        ActionCable.server.broadcast('notification_channel', 'Thank you for turning on Notifications in Arcadia.')
    end
end
