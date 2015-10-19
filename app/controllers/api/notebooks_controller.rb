class Api::NotebooksController < ApplicationController
  def index
  end

  def create
  end

  def update
  end

  def destroy
  end

  private

  def notebook_params
    params.require(:notebook).permit(:id, :title, :description, :author_id)
  end
end
