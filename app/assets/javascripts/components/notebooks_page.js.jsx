/* globals React, NotebooksList, Editor */

var NotebooksPage = React.createClass({
  render: function() {
    return (
      <div>
        <NotebooksList/>
        <NotebookEditor/>
      </div>
    );
  }
});
