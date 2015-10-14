/* globals ApiActions */

var ApiUtil = {
  fetchNotes: function() {
    $.ajax({
      type: "GET",
      url: "/api/notes",
      success: function(notes) {
        ApiActions.receiveAll(notes);
      }
    });
  },

  createNote: function(note) {
    $.ajax({
      type: "POST",
      url: "/api/notes",
      data: { note: note },
      success: function(note) {
        ApiActions.addNote(note);
      }
    });
  }
};
