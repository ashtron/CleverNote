/* globals React, ApiActions, NoteStore */

var NoteListItem = React.createClass({
  click: function(event) {
    $("li").removeClass("selected");
    $(event.target).addClass("selected");

    var title = this.props.title;
    var body = this.props.body;
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
      <li
        className="list-group-item"
        onClick={this.click}>
        {this.props.title}
      </li>
    );
  }
});
