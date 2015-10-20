/* globals React, ApiActions, NoteStore, ApiUtil */

var NoteListItem = React.createClass({
  noteClick: function(event) {
    TagStore.resetTags([]);

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
      ApiUtil.fetchTags(NoteStore.selectedNote().id);
    }
  },

  deleteClick: function(event) {
    event.stopPropagation();

    var title = this.props.title;
    var body = this.props.body;
    var note = { title: title, body: body };

    var selectedNote = NoteStore.all().filter(function(storeNote) {
      return note.title === storeNote.title;
    });

    ApiUtil.deleteNote(selectedNote[0]);
    NoteStore.deselect();
  },

  render: function() {
    return (
      <li
        className="list-group-item"
        onClick={this.noteClick}>
        {this.props.title}
        <button className="delete-button" onClick={this.deleteClick}>x</button>
      </li>
    );
  }
});
