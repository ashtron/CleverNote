/* globals React, NotebooksList, NotesList, NotebookEditor, NotebookStore */
/* globals NoteEditor */

var Homepage = React.createClass({
  getInitialState: function() {
    return { list: "", editor: "" };
  },

  _onChange: function() {
    var notebookSelected = $.isEmptyObject(NotebookStore.selectedNotebook());

    if (notebookSelected) {
      this.setState({ list: <NotebooksList/>, editor: "" });
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
