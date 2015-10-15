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
      <div className="notes-list">
        <div className="notes-list-header">Notes</div>
        <ul className="list-group">
          {
            this.state.notes.map(function(note) {
              return (
                <li className="list-group-item"
                  title={note.title}
                  body={note.body}>{note.title}

                </li>
              );
            })
          }
          </ul>
      </div>
    );
  }
});
