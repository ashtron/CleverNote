/* globals React */

var NotesPage = React.createClass({
  render: function() {
    return (
      <div>
        <NotesList/>
        <NoteForm/>
      </div>
    );
  }
});
