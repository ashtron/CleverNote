/* globals AppDispatcher, NoteConstants */

var ApiActions = {
  receiveAll: function(notes){
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
  }
};
