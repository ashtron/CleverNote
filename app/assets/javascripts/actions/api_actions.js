/* globals AppDispatcher, NoteConstants */

var ApiActions = {
  receiveAll: function(notes){
    AppDispatcher.dispatch({
      actionType: NoteConstants.NOTES_RECEIVED,
      notes: notes
    });
  }
};
