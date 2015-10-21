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

  fetchTags: function(note_id) {
    $.ajax({
      type: "GET",
      url: "api/tags",
      data: { note_id: note_id },
      success: function(tags) {
        ApiActions.receiveAllTags(tags);
      }
    });
  },

  createTag: function(tag, note_id) {
    $.ajax({
      type: "POST",
      url: "api/tags",
      data: { tag: tag, note_id: note_id },
      success: function(tag) {
        ApiActions.addTag(tag);
      }
    })
  },

  updateTag: function(tag, note_id) {
    $.ajax({
      type: "PATCH",
      url: "api/tags/" + tag.id,
      data: { tag: tag, note_id: note_id },
      success: function(tags) {
        ApiActions.updateTag(tags);
      }
    });
  },

  deleteTag: function(tag, note_id) {
    $.ajax({
      type: "DELETE",
      url: "api/tags/" + tag.id,
      data: { tag: tag, note_id: note_id },
      success: function(tags) {
        ApiActions.deleteTag(tags);
      }
    });
  },

  signOutUser: function() {
    $.ajax({
      type: "DELETE",
      url: "session",
      success: function() {
        window.location.href = '/session/new';
      }
    });
  }
};
