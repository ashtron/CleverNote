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
            <Sidebar/>
            <NotesList/>
            <NoteForm/>
            {this.props.children}
          </div>
      );
    }
  });

  var routes = (
      <Route path="/" component={App}>
        <Route path="notes/new" component={NoteForm}/>
      </Route>
  );

  React.render(<Router>{routes}</Router>, root);
});
