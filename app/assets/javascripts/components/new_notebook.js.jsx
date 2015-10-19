/* globals React, NotebooksList, NotebookEditor */

var NewNotebookPage = React.createClass({
  render: function() {
    return (
      <div>
        <NotebooksList/>
        <NotebookEditor/>
      </div>
    );
  }
});
