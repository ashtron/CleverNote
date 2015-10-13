class AddIndexesToNotes < ActiveRecord::Migration
  def change
    add_index :notes, :author_id
    add_index :notes, :notebook_id
  end
end
