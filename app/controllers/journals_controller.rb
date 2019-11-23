class JournalsController < ApplicationController
  def index
  end

  def show
    @journal = Journal.find(params[:id])
  end

  def new
    @journal = Journal.new
  end

  def create
    @journal = current_user.journals.new(journal_params)

    @journal.save!
    redirect_to journals_url
  end

  private
    def journal_params
      params.require(:journal).permit(:title, :description)
    end
end
