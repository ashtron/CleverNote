/* globals React, NoteStore, NoteListItem, ApiUtil */

var NotesList = React.createClass({
  _onChange: function() {
    this.setState({ notes: NoteStore.all() });
  },

  getInitialState: function() {
    return { notes: NoteStore.all() };
  },

  componentDidMount: function() {
    ApiUtil.fetchNotes();
    this.setState({ notes: NoteStore.all() });
    NoteStore.addChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        <div className="notes-list">
          <div className="notes-list-header">Notes</div>
          <ul className="list-group">
            {
              this.state.notes.map(function(note) {
                return (
                  <NoteListItem
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
