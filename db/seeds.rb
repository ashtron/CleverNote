# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: "Bill", password: "billbill")
User.create(username: "Jane", password: "janejane")
User.create(username: "James", password: "jamesjames")

Note.create(title: "Bill's Note", body: '{"ops":[{"insert":"I\'m Bill\n\n"}]}', author_id: 1, notebook_id: 1)
Note.create(title: "Jane's Note", body: '{"ops":[{"insert":"I\'m Jane\n\n"}]}', author_id: 2, notebook_id: 2)
Note.create(title: "James' Note", body: '{"ops":[{"insert":"I\'m James\n\n"}]}', author_id: 3, notebook_id: 3)

Notebook.create(title: "Bill's Notebook", description: '{"ops":[{"insert":"This is Bill\'s notebook.\n\n"}]}', author_id: 1)
