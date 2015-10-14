/* globals React, NoteStore, NoteListItem */

var NotesList = React.createClass({
  render: function() {
    return (
      <div className="notes-list">
        <div className="notes-list-header">Notes</div>
        {
          NoteStore.all().map(function(note) {
            debugger;
            return (<NoteListItem>{note.title}</NoteListItem>);
          })
        }
      </div>
    );
  }
});
