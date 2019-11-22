class ContactsController < ApplicationController

  def index
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