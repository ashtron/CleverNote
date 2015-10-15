/* globals EventEmitter, AppDispatcher, NoteStore, NoteConstants */

(function(root){
  var CHANGE_EVENT = "change";
  var _notes = [];
  var _selectedNote = {};

  root.NoteStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _notes.slice(0);
    },

    add: function(note) {
      _notes.push(note);
    },

    select: function(note) {
      _selectedNote = note;
    },

    deselect: function() {
      _selectedNote = {};
    },

    selectedNote: function() {
      return Object.assign({}, _selectedNote);
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
          break;
        case NoteConstants.NOTE_CREATED:
          NoteStore.add(payload.note);
          NoteStore.select(payload.note);
          NoteStore.emit(CHANGE_EVENT);
          break;
        case NoteConstants.NOTE_SELECTED:
          NoteStore.select(payload.note);
          NoteStore.emit(CHANGE_EVENT);
          break;
        case NoteConstants.NOTE_UPDATED:
          NoteStore.select(payload.note);
          NoteStore.emit(CHANGE_EVENT);
      }
    })
  });
})(this);
