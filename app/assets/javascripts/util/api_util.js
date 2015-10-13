/* globals ApiActions */

var ApiUtil = {
  fetchNotes: function() {
    $.ajax({
      type: "GET",
      url: "/api/notes",
      success: function(notes) {
        ApiActions.receiveAll(notes);
      }
    });
  }
};



// $.ajax({
//   type: "POST",
//   url: "/api/notes",
//   data: params,
//   success: function(notes) {
//     console.log(notes);
//   }
// });
