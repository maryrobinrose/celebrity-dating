$(document).ready(function() {
  $("form#match").submit(function(event) {

    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if (age <= 100) {
      $("#celebrity").show();
      $("#celebrity2").hide();
    } else {
      $("#celebrity").hide();
      $("#celebrity2").show();
    }

    event.preventDefault();
  });
});
