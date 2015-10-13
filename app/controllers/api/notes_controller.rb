class Api::NotesController < ApplicationController
  def index
    render json: Note.all
  end

  def create
    @note = Note.create(note_params)
    # Add error handling.
    render json: @note
  end

  def update
  end

  def destroy
  end

  private

  def note_params
    # Get IDs differently.
    params.require(:note).permit(:title, :body, :author_id, :notebook_id)
  end
end
