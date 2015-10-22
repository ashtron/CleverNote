/* globals React, ApiActions, NotebookStore, ApiUtil */

var NotebookListItem = React.createClass({
  notebookClick: function(event) {
    $("li").removeClass("selected");
    $(event.target).addClass("selected");

    var title = this.props.title;
    var description = this.props.description;
    var notebook = { title: title, description: description };

    var noneSelected = $.isEmptyObject(NotebookStore.selectedNotebook());
    var differentSelected = notebook.id !== NotebookStore.selectedNotebook().id;

    if (noneSelected || differentSelected) {
      var selectedNotebook =
        NotebookStore.all().filter(function(storeNotebook) {
          return notebook.title === storeNotebook.title;
        });

      ApiActions.selectNotebook(selectedNotebook[0]);
    }
  },

  deleteClick: function(event) {
    var title = this.props.title;
    var description = this.props.description;
    var notebook = { title: title, description: description };

    var selectedNotebook = NotebookStore.all().filter(function(storeNotebook) {
      return notebook.title === storeNotebook.title;
    });

    ApiUtil.deleteNotebook(selectedNotebook[0]);
  },

  render: function() {
    return (
      <li
        className="list-group-item"
        onClick={this.notebookClick}>
        {this.props.title}
        <button className="delete-button" onClick={this.deleteClick}>x</button>
      </li>
    );
  }
});
