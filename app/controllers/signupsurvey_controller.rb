class SignupsurveyController < ApplicationController

  def index
    @survey       = Survey.first.name
    @question_id  = Survey.first.questions.first.id
    @question     = Survey.first.questions.first.name
  end

end
