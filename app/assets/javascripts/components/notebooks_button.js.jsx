/* globals React, NotebookStore, NoteStore, TagStore */

var NotebooksButton = React.createClass({
  click: function() {
    NoteStore.deselect();
    NotebookStore.deselect();
    NoteStore.resetNotes([]);
    TagStore.resetTags([]);
    NotebookStore.resetNotebooks([]);
  },

  render: function() {
    return (
      <button
        onClick={this.click}
        className="btn btn-default glyphicon glyphicon-arrow-left">
      </button>
    );
  }
});
