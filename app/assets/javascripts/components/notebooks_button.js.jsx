/* globals React, NotebookStore, NoteStore */

var NotebooksButton = React.createClass({
  click: function() {
    NoteStore.deselect();
    NotebookStore.deselect();
    NoteStore.resetNotes([]);
    TagStore.resetTags([]);
  },

  render: function() {
    return (
      <button
        onClick={this.click}
        className="glyphicon glyphicon-arrow-left">
      </button>
    );
  }
});
