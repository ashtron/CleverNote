/* globals React */

var NoteListItem = React.createClass({
  click: function(event) {
    var title = event.target.dataset.title;
    var body = event.target.dataset.body;
  },

  render: function() {
    return (
      <div data-title={this.props.title} data-body={this.props.body} onClick={this.click}>
        {this.props.title}<br/><br/>{this.props.body}
      </div>
    );
  }
});
