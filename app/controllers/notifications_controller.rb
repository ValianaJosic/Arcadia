class NotificationsController < ApplicationController
  def index
  end

  def create
    # logic here
    redirect_to root_path if request.format.html?
  end
end
