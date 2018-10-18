$(document).ready(function() {
  $("form#match").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    var celebrity = (age <= 100);

    $("#celebrity").show();

    event.preventDefault();
  });
});
