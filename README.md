# CleverNote

## Minimum Viable Product

Evernote clone built on Rails and React. Minimum features:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Account creation
- [ ] Logging in/out
- [ ] Reading, writing, editing, and deleting Notes
- [ ] Collect Notes in Notebooks
- [ ] Tagging Notes
- [ ] Searching Notes
- [ ] Styling Notes (font size, color, italics, etc.)

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, API (1.5 days)

In Phase 1, I will implement user authentication following the model we learned in the Rails curriculoum. This will enable users to sign up or log in, after which they will be taken to a simple landing page, or to log out, after which they will be taken to the login/signup page. I will also implement the initial API in this phase.

### Phase 2: Notes; Flux Architecture (2 days)

In Phase 2, I will build the Note model and its controller, implemeneting CRUD functionality. With my most fundamental object in place, I will be able to start setting up Flux and creating React views for the Notes Index, IndexItem, and Forms. By the end of this phase, I should have a basic user interface in place for users to view, create, edit, and delete notes.

### Phase 3: Notebooks; Tags (2 days)

This phase will cover tagging Notes and allowing users to organize them into Notebooks. I will also implement a feature allowing users to search Notes by tag.

### Phase 4: Note Styling (2 days)

In this phase I will implement custom note styling, as found in most web applications that involve long-form text input (e.g. Tumblr, email clients).

### Phase 5: Design/Styling (2 days)

I will spend the final phase finishing CSS styling to make my app look as presentable and realistic as possible.

### Bonus Features
- [ ] "Code" option (e.g. syntax highlighting, running code in-browser)
- [ ] Reminders
