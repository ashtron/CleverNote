/* globals React, ReactRouter, NoteForm, Sidebar, NotesList */
/* globals NotesPage, NewNotes, Editor, Navbar */

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
        <IndexRoute component={NotesPage}/>
        <Route path="notes" component={NotesPage}/>
        <Route path="notes/new" component={NewNotes}/>
        <Route path="editor" component={Editor}/>
      </Route>
  );

  React.render(<Router>{routes}</Router>, root);
});
