/* globals React, NoteStore */

var Sidebar = React.createClass({
  render: function() {
    return (
      <nav className="group">
        <div className="sidebar">
          <ul>
            <li><a onClick={ NoteStore.deselect() }
              href="/#/notes/new">New Note
            </a></li>
            <li>Search</li>
          </ul>
          <ul>
            <li><a href="/#/notes">Notes</a></li>
            <li>Notebooks</li>
            <li>Tags</li>
          </ul>
        </div>
      </nav>
    );
  }
});
