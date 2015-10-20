/* globals React, Quill, NotebookStore, ApiUtil, ApiActions */

var editor = {};

var NotebookEditor = React.createClass({
  componentDidMount: function() {
    editor = new Quill('#editor');
    editor.addModule('toolbar', {
      container: '#toolbar'
    });

    var ed = this;
    editor.on('text-change', function(delta, source) {
      var description = JSON.stringify(this.getContents());

      ed.setState( { description: description } );
    });

    this.refs.titleInput.getDOMNode().focus();

    NotebookStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    NotebookStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    var title = NotebookStore.selectedNotebook().title;
    var description = NotebookStore.selectedNotebook().description;

    this.setState({ title: title, description: description });

    var selectedNotebook = NotebookStore.selectedNotebook();

    if (!$.isEmptyObject(selectedNotebook)) {
      editor.setContents(JSON.parse(selectedNotebook.description));
    }
  },

  _titleChange: function(event) {
    this.setState({ title: event.target.value });
  },

  _descriptionChange: function(event) {
    this.setState({ description: event.target.value });
  },

  getInitialState: function() {
    return ({ title: "", description: "" });
  },

  onCreateClick: function() {
    NotebookStore.deselect();
    editor.setText("");
    this.refs.titleInput.getDOMNode().focus();
  },

  submit: function(event) {
    event.preventDefault();

    var title = this.state.title;
    var description = this.state.description;
    var notebook = { title: title, description: description };
    var selectedNotebook = NotebookStore.selectedNotebook();

    if ($.isEmptyObject(selectedNotebook)) {
      ApiUtil.createNotebook(notebook);
    } else {
      notebook = $.extend(selectedNotebook, notebook);
      ApiActions.selectNotebook(notebook);
      ApiUtil.updateNotebook(notebook);
    }
  },

  render: function() {
    return (
      <div className="quill-wrapper">
        <div className="toolbar-container">
        	<div id="toolbar" className="toolbar ql-toolbar ql-snow">
        		<span className="ql-format-group">
        			<select title="Size" className="ql-size" >
        				<option value="10px">Small</option>
        				<option value="13px" defaultValue="">Normal</option>
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
        				<option value="left" label="Left" defaultValue=""></option>
        				<option value="center" label="Center"></option>
        				<option value="right" label="Right"></option>
        				<option value="justify" label="Justify"></option>
        			</select>
            </span>

        		<span className="ql-format-group">
              <span title="Link" className="ql-format-button ql-link">
              </span>
            </span>

            <span className="ql-format-group">
              <span onClick={this.onCreateClick} title="New" id="new-button" className="ql-format-button">New
              </span>
            </span>

            <span className="ql-format-group">
              <span onClick={this.submit} title="Save" id="save-button" className="ql-format-button">Save
              </span>
            </span>

            <input
              ref="titleInput"
              className="toolbar-title"
              onChange={this._titleChange}
              placeholder="Title"
              value={this.state.title}>
            </input>
        	</div>
        </div>

        <div className="editor-container">
        	<div id="editor" className="editor ql-container ql-snow">
        		<div className="ql-editor authorship" id="ql-editor-2" contentEditable="true"></div>

        		<div className="ql-paste-manager" contentEditable="true"></div>
        	</div>
        </div>
      </div>
    );
  }
});
