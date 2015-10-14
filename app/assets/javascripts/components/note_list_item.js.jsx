/* globals React, ApiActions, NoteStore */

var NoteListItem = React.createClass({
  click: function(event) {
    var title = event.target.dataset.title;
    var body = event.target.dataset.body;
    var note = { title: title, body: body };

    if ($.isEmptyObject(NoteStore.selectedNote()) || note.id !== NoteStore.selectedNote().id) {
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
