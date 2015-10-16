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
  },

  updateNote: function(note) {
    $.ajax({
      type: "PATCH",
      url: "api/notes/" + note.id,
      data: { note: note },
      success: function(notes) {
        ApiActions.updateNote(notes);
      }
    });
  },

  deleteNote: function(note) {
    $.ajax({
      type: "DELETE",
      url: "api/notes/" + note.id,
      data: { note: note },
      success: function(notes) {
        ApiActions.deleteNote(notes);
      }
    });
  },

  signOutUser: function() {
    $.ajax({
      type: "DELETE",
      url: "session",
      success: function() {
      }
    });
  }
};
