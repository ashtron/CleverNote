class Api::NotebooksController < ApplicationController
  def index
    render json: current_user.notebooks
  end

  def create
    notebook = Notebook.new(notebook_params)
    notebook.author_id = current_user.id
    notebook.save
    # Add error handling.
    render json: notebook
  end

  def update
    notebook = Notebook.find(notebook_params[:id])
    notebook.update(notebook_params)

    render json: current_user.notebooks
  end

  def destroy
    notebook = Notebook.find(notebook_params[:id])
    notebook.destroy

    render json: current_user.notebooks
  end

  private

  def notebook_params
    params.require(:notebook).permit(:id, :title, :description)
  end
end
