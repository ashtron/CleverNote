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

Note.create(title: "Bill's Note", body: "I'm Bill.", author_id: 1, notebook_id: 1)
Note.create(title: "Jane's Note", body: "I'm Jane.", author_id: 2, notebook_id: 2)
Note.create(title: "James' Note", body: "I'm James.", author_id: 3, notebook_id: 3)

# $.ajax({
#   type: "GET",
#   url: "/api/notes",
#   success: function(notes) {
#     console.log(notes);
#   }
# });
#
# $.ajax({
#   type: "POST",
#   url: "/api/notes",
#   data: params,
#   success: function(notes) {
#     console.log(notes);
#   }
# });
