/* globals ApiActions */

var ApiUtil = {
  fetchNotes: function() {
    $.ajax({
      type: "GET",
      url: "/api/notes",
      success: function(notes) {
        ApiActions.receiveAllNotes(notes);
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

  fetchNotebooks: function() {
    $.ajax({
      type: "GET",
      url: "/api/notebooks",
      success: function(notebooks) {
        ApiActions.receiveAllNotebooks(notebooks);
      }
    });
  },

  createNotebook: function(notebook) {
    $.ajax({
      type: "POST",
      url: "/api/notebooks",
      data: { notebook: notebook },
      success: function(notebook) {
        ApiActions.addNotebook(notebook);
      }
    });
  },

  updateNotebook: function(notebook) {
    $.ajax({
      type: "PATCH",
      url: "api/notebooks/" + notebook.id,
      data: { notebook: notebook },
      success: function(notebooks) {
        ApiActions.updateNotebook(notebooks);
      }
    });
  },

  deleteNotebook: function(notebook) {
    $.ajax({
      type: "DELETE",
      url: "api/notebooks/" + notebook.id,
      data: { notebook: notebook },
      success: function(notebooks) {
        ApiActions.deleteNotebook(notebooks);
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
