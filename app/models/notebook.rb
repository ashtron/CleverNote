class Notebook < ActiveRecord::Base
  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id

  has_many :notes,
    class_name: "Note",
    foreign_key: :notebook_id
end
