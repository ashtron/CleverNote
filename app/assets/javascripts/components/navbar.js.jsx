/* globals React, NoteStore, ApiUtil, NotebookStore, ReactRouter */

var Navbar = React.createClass({
  mixins: [ReactRouter.History],

  onNotebooksClick: function() {
    // NoteStore.deselect();
    // NotebookStore.deselect();
  },

  onCreateNoteClick: function(event) {
    // NoteStore.deselect();
  },

  onCreateNotebookClick: function(event) {
    var title = this.state.newNotebookTitle;
    var description = this.state.newNotebookDescription;
    var notebook = { title: title, description: description };
    var selectedNotebook = NotebookStore.selectedNotebook();

    ApiUtil.createNotebook(notebook);
    //Render to notebook list.
  },

  onNotebookTitleChange: function(event) {
    this.setState({ newNotebookTitle: event.target.value });
  },

  onNotebookDescriptionChange: function(event) {
    this.setState({ newNotebookDescription: event.target.value });
  },

  onSignOutClick: function() {
    ApiUtil.signOutUser();
  },

  render: function() {
    return (
      <nav id="nav-container" className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">CleverNote</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">New Notebook<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><input onChange={this.onNotebookTitleChange} className="new-notebook-dropdown-field" placeholder="Title"></input></li>
                  <li><input onChange={this.onNotebookDescriptionChange} className="new-notebook-dropdown-field" placeholder="Description"></input></li>
                  <li><button className="new-notebook-button" onClick={this.onCreateNotebookClick}>Create</button></li>
                </ul>
              </li>
            </ul>

            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Doesn't Work Yet"/>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>

            <ul className="nav navbar-nav sign-out-nav">
              <li><a>Guest</a></li>
              <li onClick={this.onSignOutClick}><a href="#">Sign Out</a></li>
            </ul>

          </div>
        </div>
      </nav>
    );
  }
});
