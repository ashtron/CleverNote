/* globals React, ApiActions, NoteStore */

var NoteListItem = React.createClass({
  click: function(event) {
    $("div").removeClass("selected");
    $(event.target).addClass("selected");

    var title = event.target.dataset.title;
    var body = event.target.dataset.body;
    var note = { title: title, body: body };

    var noneSelected = $.isEmptyObject(NoteStore.selectedNote());
    var differentSelected = note.id !== NoteStore.selectedNote().id;

    if (noneSelected || differentSelected) {
      var selectedNote = NoteStore.all().filter(function(storeNote) {
        return note.title === storeNote.title;
      });

      ApiActions.selectNote(selectedNote[0]);
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
