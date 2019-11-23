class JournalController < ApplicationController
  def index
  end

  def new
  end

  def create
    render plain: params[:entry].inspect
  end
end
