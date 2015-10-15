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
      	<div id="toolbar" className="toolbar ql-toolbar ql-snow">
      		<span className="ql-format-group">
      			<select title="Size" className="ql-size" >
      				<option value="10px">Small</option>
      				<option value="13px" selected="">Normal</option>
      				<option value="18px">Large</option>
      				<option value="32px">Huge</option>
      			</select>
      		</span>

      		<span className="ql-format-group">
            <span title="Bold" className="ql-format-button ql-bold"></span>
            <span className="ql-format-separator"></span>
            <span title="Italic" className="ql-format-button ql-italic"></span>
            <span className="ql-format-separator"></span>
            <span title="Underline" className="ql-format-button ql-underline"></span>
            <span className="ql-format-separator"></span>
            <span title="Strikethrough" className="ql-format-button ql-strike"></span>
          </span>

      		<span className="ql-format-group">
      			<span title="List" className="ql-format-button ql-list"></span>
            <span className="ql-format-separator"></span>
            <span title="Bullet" className="ql-format-button ql-bullet"></span>
          </span>

          <span className="ql-format-group">
      			<select title="Text Alignment" className="ql-align" >
      				<option value="left" label="Left" selected=""></option>
      				<option value="center" label="Center"></option>
      				<option value="right" label="Right"></option>
      				<option value="justify" label="Justify"></option>
      			</select>
          </span>

      		<span className="ql-format-group">
            <span title="Link" className="ql-format-button ql-link">
            </span>
          </span>

          <span className="toolbar-title">Bill's Cool Note</span>
      	</div>

      	<div id="editor" className="editor ql-container ql-snow">
      		<div className="ql-multi-cursor">
            <span className="cursor left hidden">
              <span className="cursor-flag">
                <span className="cursor-triangle top"></span>
                <span className="cursor-name">Gandalf</span>
                <span className="cursor-triangle bottom"></span>
              </span>

              <span className="cursor-caret"></span>
            </span>
          </div>

      		<div className="ql-editor authorship" id="ql-editor-2" contenteditable="true">
      			<div>Start typing.</div>
      		</div>

      		<div className="ql-paste-manager" contenteditable="true"></div>
      	</div>
      </div>
    );
  }
});
