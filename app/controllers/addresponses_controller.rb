class AddresponsesController < ApplicationController

  def create
    @question_id = Survey.first.questions.first.id
    session[:responses] = params[@question_id.to_s]
    @responses = session[:responses]
    puts '==========================='
    puts 'RESPONSE'
    puts @responses
    puts '==========================='
    redirect_to '/users/sign_up'
  end

end