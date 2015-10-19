# == Schema Information
#
# Table name: notebooks
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  title       :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Notebook < ActiveRecord::Base
  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id

  has_many :notes,
    class_name: "Note",
    foreign_key: :notebook_id
end
