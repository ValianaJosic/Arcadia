class PrescriptionsController < ApplicationController

  def show
  end
  
  def create
    prescription = Prescription.new(
      user: current_user,
      brand_name: params[:brandName],
      generic_name: params[:genericName],
      dosage_form: params[:dosageForm],
      product_type: params[:productType],
      product_id: params[:productID],
      product_ndc: params[:productNDC],
      user_dosage: params[:userDosage],
      user_notes: params[:userNotes]
    ).save
  end

end