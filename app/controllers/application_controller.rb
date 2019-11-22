class ApplicationController < ActionController::Base
   before_action :authenticate_user!

  private

  def after_sign_out_path_for(resource_or_scope)
    user_session_path
  end


end
