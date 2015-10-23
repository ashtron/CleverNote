/* globals React, NotebooksList, NotesList, NotebookEditor, NotebookStore */
/* globals NoteEditor, Konami */

var Homepage = React.createClass({
  getInitialState: function() {
    return { list: <NotebooksList/>, editor: "" };
  },

  _onChange: function() {
    var notebookSelected = !$.isEmptyObject(NotebookStore.selectedNotebook());

    if (!notebookSelected) {
      this.setState({ list: <NotebooksList/>, editor: "" });
    } else {
      this.setState({ list: <NotesList/>, editor: <NoteEditor/> });
    }
  },

  componentDidMount: function() {
    NotebookStore.addChangeListener(this._onChange);

    var easterEgg = new Konami();
    easterEgg.code = function() {
      var elements = $("*");

      if (elements.hasClass("rainbow")) {
        $("*").removeClass("rainbow");
      } else {
        $("*").addClass("rainbow");
      }
    };

    easterEgg.load();
  },

  componentWillUnmount: function() {
    NotebookStore.removeChangeListener(this._onChange);
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
