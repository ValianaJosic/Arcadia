class ContactsController < ApplicationController

  def new
    @contact = Contact.new
  end

  def index
    @contact = current_user.contacts.all
    respond_to do |format|
      format.html
      format.json do
        contacts = current_user
                  .contacts
        render json: contacts 
      end
    end
  end

  def create
    @contactadd = current_user.contacts.new(contact_params)

    if @contactadd.save
       redirect_to '/contacts'
    end
  end

  private

  def contact_params
    params.require(:contact).permit(
      :name,
      :phone1,
      :phone2,
      :fax,
      :email,
      :address1,
      :address2,
      :city,
      :state,
      :zipcode,
      :country,
      :notes
    )
  end
end