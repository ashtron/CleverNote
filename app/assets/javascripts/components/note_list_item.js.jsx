/* globals React, ApiActions, NoteStore */

var NoteListItem = React.createClass({
  click: function(event) {
    var title = event.target.dataset.title;
    var body = event.target.dataset.body;
    var note = { title: title, body: body };

    // Can't select a different note once a note has
    // been selected.

    if ($.isEmptyObject(NoteStore.selectedNote())) {
      var sNote = NoteStore.all().filter(function(exNote) {
        return note.title === exNote.title;
      });

      ApiActions.selectNote(sNote[0]);
    }
  },

  render: function() {
    return (
      <div
        data-title={this.props.title}
        data-body={this.props.body}
        onClick={this.click}>
        {this.props.title}
      </div>
    );
  }
});
