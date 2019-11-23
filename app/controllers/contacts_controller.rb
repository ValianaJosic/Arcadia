class ContactsController < ApplicationController

  def index
    if current_user
    @contact = current_user.contacts
    else
      redirect_to user_session_path, notice: 'You are not logged in.'
    end
  end

  def create
    @contactadd = Contact.create(
      user: current_user,
      name: params[:name],
      phone1: params[:phone1],
      phone2: params[:phone2],
      fax: params[:fax],
      email: params[:email],
      address1: params[:address1],
      address2: params[:address2],
      city: params[:city],
      state: params[:state],
      zipcode: params[:zipcode],
      country: params[:country],
      notes: params[:notes]
    )
  end
  puts @contactadd

end