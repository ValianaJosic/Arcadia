class PrescriptionsController < ApplicationController

  def index
    @prescriptions = current_user.prescriptions
  end
  
  def create
  Prescription.create(
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