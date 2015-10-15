/* globals React, ReactRouter, NoteForm, Sidebar, NotesList */

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
      </Route>
  );

  React.render(<Router>{routes}</Router>, root);
});
