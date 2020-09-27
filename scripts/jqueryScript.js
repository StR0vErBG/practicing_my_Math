$(document).ready(function () {
  $("#menu").hide();
  $("#menu").fadeIn(2000);
});

$("#menu").click(function () {
  $("body").fadeOut(2000);
});
