/* globals React, NotebooksList, NotesList, NotebookEditor, NotebookStore */
/* globals NoteEditor */

var NotebooksPage = React.createClass({
  getInitialState: function() {
    return { list: <NotebooksList/>, editor: <NotebookEditor/> };
  },

  _onChange: function() {
    if ($.isEmptyObject(NotebookStore.selectedNotebook())) {
      this.setState({ list: <NotebooksList/>, editor: <NotebookEditor/> });
    } else {
      this.setState({ list: <NotesList/>, editor: <NoteEditor/> });
    }
  },

  componentDidMount: function() {
    NotebookStore.addChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        {this.state.list}
        {this.state.editor}
      </div>
    );
  }
});
