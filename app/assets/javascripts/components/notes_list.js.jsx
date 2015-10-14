/* globals React, NoteStore, NoteListItem */

var NotesList = React.createClass({
  _onChange: function() {
    this.setState({ notes: NoteStore.all() });
  },

  getInitialState: function() {
    return { notes: NoteStore.all() };
  },

  componentDidMount: function() {
    this.setState({ notes: NoteStore.all() });
    NoteStore.addChangeListener(this._onChange);
  },

  onClick: function() {
    ApiUtil.fetchNotes();
  },

  render: function() {
    return (
      <div className="notes-list">
        <div className="notes-list-header">Notes</div>
          {
            NoteStore.all().map(function(note) {
              return (<div>{note.title}</div>);
            })
          }
          <button onClick={this.onClick}>Fetch Notes</button>
      </div>
    );
  }
});
