/* globals React, NotebookStore, NotebookListItem, ApiUtil */

var NotebooksList = React.createClass({
  _onChange: function() {
    this.setState({ notebooks: NotebookStore.all() });
  },

  getInitialState: function() {
    return { notebooks: NotebookStore.all() };
  },

  componentDidMount: function() {
    ApiUtil.fetchNotes();
    this.setState({ notebooks: NotebookStore.all() });
    NotebookStore.addChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        <div className="notebooks-list">
          <div className="notebooks-list-header">Notebooks
            <span className="note-count">{NotebookStore.all().length + " notebooks"}</span>
          </div>
          <ul className="list-group">
            {
              this.state.notebooks.map(function(notebook) {
                return (
                  <NotebookListItem
                    key={notebook.id}
                    title={notebook.title}
                    body={notebook.body}>{notebook.title}
                  </NotebookListItem>
                );
              })
            }
            </ul>
        </div>
      </div>
    );
  }
});
