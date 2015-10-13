/* globals React */

var Sidebar = React.createClass({
  render: function() {
    return (
      <nav className="group">
        <div className="sidebar">
          <ul>
            <li>New Note</li>
            <li>Search</li>
          </ul>
          <ul>
            <li>Notes</li>
            <li>Notebooks</li>
            <li>Tags</li>
          </ul>
        </div>
      </nav>
    );
  }
});
