class Api::TagsController < ApplicationController
  def index
    note = Note.find(params[:note_id])

    render json: note.tags
  end

  def create
    note = Note.find(params[:note_id])
    tag = note.tags.create(name: tag_params[:name])

    render json: tag
  end

  def update
    note = Note.find(params[:note_id])

    tag = Tag.find(tag_params)
    tag.update(tag_params)

    render json: note.tags
  end

  def destroy
    note = Note.find(params[:note_id])

    tag = Tag.find(params[:tag]["0"][:id])
    tag.destroy

    render json: note.tags
  end

  private

  def tag_params
    params.require(:tag).permit(:id, :name)
  end
end
