class PrescriptionsController < ApplicationController

  def index  

    respond_to do |format|
      format.html
      format.json do
        prescriptions = current_user
                  .prescriptions
        render json: prescriptions 
      end
    end

    # if current_user
    #   @prescriptions = current_user.prescriptions
    # else
    #   redirect_to user_session_path, notice: 'You are not logged in.'
    # end
 end
  
  def create
    @prescriptionadd = Prescription.create(
      user: current_user,
      brand_name: params[:brandName],
      generic_name: params[:genericName],
      dosage_form: params[:dosageForm].split.map(&:capitalize).join(' '),
      product_type: params[:productType].split.map(&:capitalize).join(' '),
      product_id: params[:productID],
      product_ndc: params[:productNDC],
      user_dosage: params[:userDosage],
      user_notes: params[:userNotes]
    )
  end

end