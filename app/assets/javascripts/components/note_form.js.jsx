/* globals React, ApiUtil, NoteStore, ApiActions */

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
    return ({ title: "Title", body: "", mode: this.props.mode });
  },

  componentDidMount: function() {
    NoteStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    NoteStore.removeChangeListener(this._onChange);
  },

  submit: function(event) {
    event.preventDefault();

    var title = event.target.title.value;
    var body = event.target.body.value;
    var note = { title: title, body: body };
    var selectedNote = NoteStore.selectedNote();

    if ($.isEmptyObject(selectedNote)) {
      ApiUtil.createNote(note);
    } else {
      note = $.extend(selectedNote, note);
      ApiActions.selectNote(note);
      ApiUtil.updateNote(note);
    }
  },

  render: function() {
    return (
      <div>
        <form className="note-form group" onSubmit={this.submit}>
          <input
            onChange={this._titleChange}
            placeholder="Title"
            className="title-field"
            type="text"
            name="title"
            value={this.state.title}>
          </input>

          <textarea
            onChange={this._bodyChange}
            placeholder="Enter text here..."
            className="note-input"
            name="body"
            value={this.state.body}>
          </textarea>

          <button className="save-button">Save Note</button>
        </form>
      </div>
    );
  }
});
