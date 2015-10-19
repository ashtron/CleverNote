/* globals React, ReactRouter, NoteForm, Sidebar, NotesList */
/* globals NotebooksPage, NewNotes, NoteEditor, Navbar, NotesPage */

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
            {this.props.children}
          </div>
      );
    }
  });

  var routes = (
      <Route path="/" component={App}>
        <Route path="notes" component={NotesPage}/>
        <Route path="notebooks" component={NotebooksPage}/>
        <Route path="notes/new" component={NoteEditor}/>
      </Route>
  );

  React.render(<Router>{routes}</Router>, root);
});
