/* globals React, NotesList, Editor */

var NotesPage = React.createClass({
  render: function() {
    return (
      <div>
        <NotesList/>
        <Editor/>
      </div>
    );
  }
});
