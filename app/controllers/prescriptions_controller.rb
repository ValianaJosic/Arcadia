class PrescriptionsController < ApplicationController
 
  def index  
<<<<<<< HEAD
    @prescription = current_user.prescriptions.all
=======
    @prescriptions = current_user.prescriptions.all
>>>>>>> master
    respond_to do |format|
      format.html
      format.json do
        prescriptions = current_user
                        .prescriptions
        render json: prescriptions 
      end
    end
  end

  def create
  Prescription.create(
      user: current_user,
      name: params[:brandName],
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