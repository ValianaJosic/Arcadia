class AddResponsesController < ApplicationController
  skip_before_action :authenticate_user

  def create
    @question_id = Survey.first.questions.first.id
    session[:responses] = params[@question_id.to_s]
    session[:some_responses] = params[:responses]
    p 'session responses'
    p session[:some_responses]
    @responses = session[:responses]
  end

end