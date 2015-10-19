/* globals React, NotesList, NoteEditor */

var NotesPage = React.createClass({
  render: function() {
    return (
      <div>
        <NotesList/>
        <NoteEditor/>
      </div>
    );
  }
});
