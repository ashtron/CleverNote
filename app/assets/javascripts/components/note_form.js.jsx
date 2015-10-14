/* globals React, ApiUtil */

var NoteForm = React.createClass({
  submit: function(event) {
    event.preventDefault();

    var title = event.target.title.value;
    var body = event.target.body.value;
    var note = { title: title, body: body};

    ApiUtil.createNote(note);
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input className="title-field" type="text" name="title" defaultValue="Title"></input>
          <textarea className="note-input" name="body"></textarea>
          <button>Create Note</button>
        </form>
      </div>
    );
  }
});
