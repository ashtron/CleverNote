class Api::NotesController < ApplicationController
  def index
    render json: current_user.notes
  end

  def create
    note = Note.new(note_params)
    note.author_id = current_user.id
    note.notebook_id = note_params[:notebook_id] # FIX!
    note.save
    # Add error handling.
    render json: note
  end

  def update
    note = Note.find(note_params[:id])
    note.update(note_params)

    render json: current_user.notes
  end

  def destroy
    note = Note.find(note_params[:id])
    note.destroy

    render json: current_user.notes
  end

  private

  def note_params
    # Get IDs differently.
    params.require(:note).permit(:id, :title, :body, :notebook_id)
  end
end
