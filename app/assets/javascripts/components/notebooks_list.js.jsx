/* globals React, NotebookStore, NotebookListItem, ApiUtil */

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var NotebooksList = React.createClass({
  _onChange: function() {
    this.setState({ notebooks: NotebookStore.all() });
  },

  getInitialState: function() {
    return { notebooks: NotebookStore.all() };
  },

  componentDidMount: function() {
    ApiUtil.fetchNotebooks();
    this.setState({ notebooks: NotebookStore.all() });
    NotebookStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    NotebookStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var notebookCount = "";
    var notebooksLength = this.state.notebooks.length;

    if (notebooksLength === 1) {
      notebookCount = notebooksLength + " notebook";
    } else {
      notebookCount = notebooksLength + " notebooks";
    }

    var notebooks =
      this.state.notebooks.map(function(notebook) {
        return (
          <NotebookListItem
            key={notebook.id}
            title={notebook.title}
            body={notebook.body}>{notebook.title}
          </NotebookListItem>
        );
      });

    return (
      <div>
        <div className="notebooks-list">
          <div className="notebooks-list-header">Notebooks
            <span className="note-count">{notebookCount}</span>
          </div>
          <ul className="list-group">
            <ReactCSSTransitionGroup
              transitionAppear={true}
              transitionName="note-slide"
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}>
              {notebooks}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    );
  }
});
