/* globals React, Quill */

var Editor = React.createClass({
  componentDidMount: function() {
    var editor = new Quill('#editor');
      editor.addModule('toolbar', {
        container: '#toolbar'
    });
  },

  render: function() {
    return (
      <div className="quill-wrapper">
        <div id="toolbar" className="toolbar ql-toolbar">
          <select title="Size" className="ql-size">
            <option value="10px">Small</option>
            <option value="13px" selected="">Normal</option>
            <option value="18px">Large</option>
            <option value="32px">Huge</option>
          </select>

          <button className="ql-bold">Bold</button>
          <button className="ql-italic">Italic</button>
        </div>

        <div id="editor" className="editor ql-container"><div className="ql-editor" id="ql-editor-1" contenteditable="true"></div></div>
      </div>
    );
  }
});
