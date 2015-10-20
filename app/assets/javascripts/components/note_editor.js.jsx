/* globals React, Quill, NoteStore, ApiUtil, ApiActions, NotebookStore */
/* globals TagStore */

var editor = {};

var NoteEditor = React.createClass({
  componentDidMount: function() {
    editor = new Quill('#editor', {
      modules: {
        'toolbar': { container: '#toolbar' },
        'image-tooltip': true,
        'link-tooltip': true
      },

      theme: 'snow'
    });

    var ed = this;
    editor.on('text-change', function(delta, source) {
      var body = JSON.stringify(this.getContents());

      ed.setState( { body: body } );
    });

    this.refs.titleInput.getDOMNode().focus();

    NoteStore.addChangeListener(this._onChange);
    TagStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    NoteStore.removeChangeListener(this._onChange);
    TagStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    var title = NoteStore.selectedNote().title;
    var body = NoteStore.selectedNote().body;

    this.setState({ title: title, body: body });

    var selectedNote = NoteStore.selectedNote();

    if (!$.isEmptyObject(selectedNote)) {
      // debugger;
      editor.setContents(JSON.parse(selectedNote.body));
    } else {
      // debugger;
      // editor.setContents();
    }
  },

  _titleChange: function(event) {
    this.setState({ title: event.target.value });
  },

  _bodyChange: function(event) {
    this.setState({ body: event.target.value });
  },

  getInitialState: function() {
    return ({ title: "", body: "" });
  },

  onCreateClick: function() {
    TagStore.resetTags([]);
    NoteStore.deselect();
    editor.setText("");
    this.refs.titleInput.getDOMNode().focus();
  },

  onNewTagClick: function(event) {
    var note_id = NoteStore.selectedNote().id;
    var name = prompt("name");
    var tag = { name: name };

    ApiUtil.createTag(tag, note_id);
  },

  onTagDeleteClick: function(event) {
    var name = event.target.textContent.slice(1);
    var note_id = NoteStore.selectedNote().id;

    var tag = TagStore.all().filter(function(tag) {
      return tag.name === name;
    });

    ApiUtil.deleteTag(tag, note_id);
    ApiUtil.fetchTags(note_id);
  },

  submit: function(event) {
    event.preventDefault();

    var title = this.state.title;
    var body = this.state.body;
    var note = { title: title, body: body };
    var selectedNote = NoteStore.selectedNote();

    if ($.isEmptyObject(selectedNote)) {
      note.notebook_id = NotebookStore.selectedNotebook().id;
      ApiUtil.createNote(note);
    } else {
      note = $.extend(selectedNote, note);
      ApiActions.selectNote(note);
      ApiUtil.updateNote(note);
    }
  },

  render: function() {
    var that = this;

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
        			<select title="Text Alignment" className="ql-align">
        				<option value="left" label="Left" defaultValue=""></option>
        				<option value="center" label="Center"></option>
        				<option value="right" label="Right"></option>
        				<option value="justify" label="Justify"></option>
        			</select>
            </span>

        		<span className="ql-format-group">
              <span title="Link" className="ql-format-button ql-link"></span>
              <span title="image" className="ql-format-button ql-image"></span>
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

          <div className="tag-list-container">
            <div className="tag-list">
              {
                TagStore.all().map(function(tag) {
                  return (
                    <span key={tag.id} className="tag" data-hover="delete?" onClick={that.onTagDeleteClick}>
                      #{tag.name}
                    </span>
                  );
                })
              }

              <button className="new-tag-button" onClick={this.onNewTagClick}>+</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
