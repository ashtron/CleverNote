/* globals React */

var NoteForm = React.createClass({
  render: function() {
    return (
      <div>
        <form>
          <textarea className="note-input" rows="10" cols="50"></textarea><br/>
        </form>
      </div>
    );
  }
});
