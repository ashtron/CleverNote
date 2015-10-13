class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :notebook_id, null: false

      t.timestamps null: false
    end

    add_index :notes, :author_id, unique: true
    add_index :notes, :notebook_id, unique: true
  end
end
