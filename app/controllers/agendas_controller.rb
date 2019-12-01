class AgendasController < ApplicationController

  def index
    @user = current_user
    @prescriptions =  current_user.events.where(user: current_user, eventable_type: "Prescription").map { |prescription_event| prescription_event.eventable }
    @appointments = current_user.events.where(user: current_user, eventable_type: "Contact").map { |contact_event| contact_event.eventable }
    @contacts = @user.contacts
    @event = current_user.events.all
  end

end
