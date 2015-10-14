/* globals React, ApiUtil, NoteStore */

var _title = "Title";
var _body = "Body";

var NoteForm = React.createClass({
  _onChange: function() {
    var title = NoteStore.selectedNote().title;
    var body = NoteStore.selectedNote().body;

    this.setState({ title: title, body: body });
  },

  _titleChange: function(event) {
    this.setState({ title: event.target.value });
  },

  _bodyChange: function(event) {
    this.setState({ body: event.target.value });
  },

  getInitialState: function() {
    return ({ title: "Title", body: "" });
  },

  componentDidMount: function() {
    NoteStore.addChangeListener(this._onChange);
  },

  submit: function(event) {
    event.preventDefault();

    var title = event.target.title.value;
    var body = event.target.body.value;
    var note = { title: title, body: body };

    var matchingNotes = NoteStore.all().filter(function(note) {
      return (title === note.title && body === note.body);
    });

    if (matchingNotes > 0) {
      //Save note.
    } else {
      ApiUtil.createNote(note);
    }
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input
            onChange={this._titleChange}
            className="title-field"
            type="text"
            name="title"
            value={this.state.title}>
          </input>

          <textarea
            onChange={this._bodyChange}
            className="note-input"
            name="body"
            value={this.state.body}>
          </textarea>

          <button>Create Note</button>
        </form>
      </div>
    );
  }
});
