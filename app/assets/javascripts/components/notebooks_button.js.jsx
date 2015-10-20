/* globals React, NotebookStore */

var NotebooksButton = React.createClass({
  click: function() {
    NotebookStore.deselect();
  },

  render: function() {
    return (
      <button
        onClick={this.click}
        className="glyphicon glyphicon-arrow-left">
      </button>
    );
  }
});
