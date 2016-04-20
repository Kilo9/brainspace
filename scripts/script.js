$("#new").click(function() {
  $("section").append("<div class='drag resize'></div>");
  $('.drag').draggable();
  $('.resize').resizeable();
});
