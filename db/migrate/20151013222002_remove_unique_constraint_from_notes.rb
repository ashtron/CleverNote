class RemoveUniqueConstraintFromNotes < ActiveRecord::Migration
  def change
    remove_index :notes, :notebook_id
  end
end
