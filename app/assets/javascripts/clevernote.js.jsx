/* globals React, ReactRouter, NoteForm, Sidebar, NotesList */
/* globals NotebooksPage, NewNotes, NoteEditor, Navbar, NotesPage */
/* globals Homepage, NewNotebookPage */

$(function() {
  var root = document.getElementById('content');
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function() {
      return (
          <div>
            <Navbar/>
            <Homepage/>
            {this.props.children}
          </div>
      );
    }
  });

  var routes = (
      <Route path="/" component={App}>
        <Route path="home" component={Homepage}/>
        <Route path="notes" component={NotesPage}/>
        <Route path="notebooks/new" component={NewNotebookPage}/>
      </Route>
  );

  React.render(<Router>{routes}</Router>, root);
});
