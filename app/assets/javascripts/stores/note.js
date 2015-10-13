/* globals EventEmitter, AppDispatcher, NoteStore, NoteConstants */

(function(root){
  var CHANGE_EVENT = "change";
  var _notes = [];

  root.NoteStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _notes.slice(0);
    },

    addChangeListener: function(callback){
      this.addListener(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    resetNotes: function(notes) {
      _notes = notes;
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case NoteConstants.NOTES_RECEIVED:
          NoteStore.resetNotes(payload.notes);
          NoteStore.emit(CHANGE_EVENT);
      }
    })
  });
})(this);
