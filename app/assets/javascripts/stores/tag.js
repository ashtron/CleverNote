/* globals EventEmitter, AppDispatcher, NoteStore, NoteConstants */
/* globals TagStore, TagConstants */

(function(root) {
  var CHANGE_EVENT = "change";
  var _tags = [];

  root.TagStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      if (typeof _tags === "undefined") {
        return [];
      } else {
        return _tags.slice(0);
      }
    },

    add: function(tag) {
      _tags.push(tag);
    },

    addChangeListener: function(callback) {
      this.addListener(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    resetTags: function(tags) {
      _tags = tags;
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case TagConstants.TAGS_RECEIVED:
          TagStore.resetTags(payload.tags);
          TagStore.emit(CHANGE_EVENT);
          break;
        case TagConstants.TAG_CREATED:
          TagStore.add(payload.tag);
          TagStore.emit(CHANGE_EVENT);
          break;
        case TagConstants.TAG_UPDATED:
          TagStore.resetTags(payload.tags);
          TagStore.emit(CHANGE_EVENT);
          break;
        case TagConstants.TAG_DELETED:
          TagStore.resetTags(payload.tags);
          TagStore.emit(CHANGE_EVENT);
      }
    })
  });
})(this);
