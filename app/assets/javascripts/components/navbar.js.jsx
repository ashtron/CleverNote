/* globals React, NoteStore, ApiUtil, NotebookStore */

var Navbar = React.createClass({
  onNotebooksClick: function() {
    NotebookStore.deselect();
  },

  onCreateNoteClick: function(event) {
    NoteStore.deselect();
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
              <li onClick={this.onNotebooksClick}><a href="#/notebooks">Notebooks</a></li>
              <li onClick={this.onCreateNoteClick}><a href="#/notes/new">Create Note</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>

            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search"/>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>

            <ul className="nav navbar-nav">
              <li onClick={this.onSignOutClick}><a href="#">Sign Out</a></li>
            </ul>

          </div>
        </div>
      </nav>
    );
  }
});
