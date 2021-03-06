/* globals AppDispatcher, NoteConstants, NotebookConstants, TagConstants */

var ApiActions = {
  receiveAllNotes: function(notes) {
    AppDispatcher.dispatch({
      actionType: NoteConstants.NOTES_RECEIVED,
      notes: notes
    });
  },

  addNote: function(note) {
    AppDispatcher.dispatch({
      actionType: NoteConstants.NOTE_CREATED,
      note: note
    });
  },

  // Move to separate actions file?

  selectNote: function(note) {
    AppDispatcher.dispatch({
      actionType: NoteConstants.NOTE_SELECTED,
      note: note
    });
  },

  updateNote: function(notes) {
    AppDispatcher.dispatch({
      actionType: NoteConstants.NOTE_UPDATED,
      notes: notes
    });
  },

  deleteNote: function(notes) {
    AppDispatcher.dispatch({
      actionType: NoteConstants.NOTE_DELETED,
      notes: notes
    });
  },

  //Notebook actions.

  receiveAllNotebooks: function(notebooks) {
    AppDispatcher.dispatch({
      actionType: NotebookConstants.NOTEBOOKS_RECEIVED,
      notebooks: notebooks
    });
  },

  addNotebook: function(notebook) {
    AppDispatcher.dispatch({
      actionType: NotebookConstants.NOTEBOOK_CREATED,
      notebook: notebook
    });
  },

  selectNotebook: function(notebook) {
    AppDispatcher.dispatch({
      actionType: NotebookConstants.NOTEBOOK_SELECTED,
      notebook: notebook
    });
  },

  updateNotebook: function(notebooks) {
    AppDispatcher.dispatch({
      actionType: NotebookConstants.NOTEBOOK_UPDATED,
      notebooks: notebooks
    });
  },

  deleteNotebook: function(notebooks) {
    AppDispatcher.dispatch({
      actionType: NotebookConstants.NOTEBOOK_DELETED,
      notebooks: notebooks
    });
  },

  receiveAllTags: function(tags) {
    AppDispatcher.dispatch({
      actionType: TagConstants.TAGS_RECEIVED,
      tags: tags
    });
  },

  addTag: function(tag) {
    AppDispatcher.dispatch({
      actionType: TagConstants.TAG_CREATED,
      tag: tag
    });
  },

  updateTag: function(tags) {
    AppDispatcher.dispatch({
      actionType: TagConstants.TAG_UPDATED,
      tags: tags
    });
  },

  deleteTag: function(tags) {
    AppDispatcher.dispatch({
      actionType: TagConstants.TAG_DELETED,
      tags: tags
    });
  }
};
