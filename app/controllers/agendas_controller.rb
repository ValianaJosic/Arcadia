class AgendasController < ApplicationController

  def index
    @user = current_user
    @prescriptions =  current_user.events.where(user: current_user, eventable_type: "Prescription").map { |prescription_event| prescription_event.eventable }
    @contacts = @user.contacts
  end

end
