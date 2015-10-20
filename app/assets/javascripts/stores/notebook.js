/* globals EventEmitter, AppDispatcher, NotebookStore, NotebookConstants */
/* globals NoteStore */

(function(root){
  var CHANGE_EVENT = "change";
  var _notebooks = [];
  var _selectedNotebook = {};

  root.NotebookStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      if (typeof _notebooks === "undefined") {
        return [];
      } else {
        return _notebooks.slice(0);
      }
    },

    allNotes: function() {
      var notes = NoteStore.all().filter(function(note) {
        return note.notebook_id === _selectedNotebook.id;
      });

      return notes.slice(0);
    },

    add: function(notebook) {
      _notebooks.push(notebook);
    },

    select: function(notebook) {
      _selectedNotebook = notebook;
    },

    deselect: function() {
      _selectedNotebook = {};
      this.emit(CHANGE_EVENT);
    },

    selectedNotebook: function() {
      return Object.assign({}, _selectedNotebook);
    },

    addChangeListener: function(callback){
      this.addListener(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    resetNotebooks: function(notebooks) {
      if (typeof notebooks !== "undefined") {
        _notebooks = notebooks;
      }
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case NotebookConstants.NOTEBOOKS_RECEIVED:
          NotebookStore.resetNotebooks(payload.notebooks);
          NotebookStore.emit(CHANGE_EVENT);
          break;
        case NotebookConstants.NOTEBOOK_CREATED:
          NotebookStore.add(payload.notebook);
          NotebookStore.select(payload.notebook);
          NotebookStore.emit(CHANGE_EVENT);
          break;
        case NotebookConstants.NOTEBOOK_SELECTED:
          NotebookStore.select(payload.notebook);
          NotebookStore.emit(CHANGE_EVENT);
          break;
        case NotebookConstants.NOTEBOOK_UPDATED:
          ApiUtil.fetchNotebooks();
          NotebookStore.resetNotebooks(payload.notebooks);
          NotebookStore.emit(CHANGE_EVENT);
          break;
        case NotebookConstants.NOTEBOOK_DELETED:
          NotebookStore.resetNotebooks(payload.notebooks);
          NotebookStore.deselect();
          NotebookStore.emit(CHANGE_EVENT);
      }
    })
  });
})(this);
