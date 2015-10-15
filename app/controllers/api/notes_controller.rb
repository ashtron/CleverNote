class Api::NotesController < ApplicationController
  def index
    notes = Note.all.select { |note| note.author_id == current_user.id }
    render json: notes
  end

  def create
    note = Note.new(note_params)
    note.author_id = current_user.id
    note.notebook_id = 1 # FIX!
    note.save
    # Add error handling.
    render json: note
  end

  def update
    note = Note.find(note_params[:id])
    note.update(note_params)
    # notes = Note.all.select { |note| note.author_id == current_user.id }
    render json: note
  end

  def destroy
  end

  private

  def note_params
    # Get IDs differently.
    params.require(:note).permit(:id, :title, :body, :author_id, :notebook_id)
  end
end
