class NotificationsController < ApplicationController
  def index
    ActionCable.server.broadcast('notification_channel', 'Thank you for turning on Notifications in Arcadia.')
  end

  def create
    # logic here
    redirect_to root_path if request.format.html?
  end
end
