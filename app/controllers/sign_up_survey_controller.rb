class SignUpSurveyController < ApplicationController
  skip_before_action :authenticate_user

  def index
    @survey       = Survey.first.name || ''
    @question_id  = Survey.first.questions.first.id || ''
    @question     = Survey.first.questions.first.name || ''
  end

end
