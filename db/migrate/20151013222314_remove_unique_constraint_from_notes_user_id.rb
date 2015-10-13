class RemoveUniqueConstraintFromNotesUserId < ActiveRecord::Migration
  def change
    remove_index :notes, :author_id
  end
end
