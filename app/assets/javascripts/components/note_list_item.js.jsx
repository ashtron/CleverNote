/* globals React, ApiActions */

var NoteListItem = React.createClass({
  click: function(event) {
    var title = event.target.dataset.title;
    var body = event.target.dataset.body;
    var note = { title: title, body: body };

    ApiActions.selectNote(note);
  },

  render: function() {
    return (
      <div
        data-title={this.props.title}
        data-body={this.props.body}
        onClick={this.click}>
        {this.props.title}
      </div>
    );
  }
});
