/* globals React, NoteStore, NoteListItem, ApiUtil, NotebookStore */

var NotesList = React.createClass({
  _onChange: function() {
    this.setState({ notes: NotebookStore.allNotes() });
  },

  getInitialState: function() {
    return { notes: NotebookStore.allNotes() };
  },

  componentDidMount: function() {
    ApiUtil.fetchNotes();
    this.setState({ notes: NotebookStore.allNotes() });
    NoteStore.addChangeListener(this._onChange);
  },

  render: function() {
    var noteCount = "";
    var notesLength = this.state.notes.length;

    if (notesLength === 1) {
      noteCount = notesLength + " note";
    } else {
      noteCount = notesLength + " notes";
    }

    return (
      <div>
        <div className="notes-list">
          <div className="notes-list-header">Notes
            <span className="note-count">{noteCount}</span>
          </div>
          <ul className="list-group">
            {
              this.state.notes.map(function(note) {
                return (
                  <NoteListItem
                    key={note.id}
                    title={note.title}
                    body={note.body}>{note.title}
                  </NoteListItem>
                );
              })
            }
            </ul>
        </div>
      </div>
    );
  }
});
