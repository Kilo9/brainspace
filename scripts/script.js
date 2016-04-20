$(function () {
  function checkStorage(callback)
  {
    if (typeof(Storage) !== "undefined") {
      callback();
    } else {
      alert("sorry your browser/settings do not support saving");
    }
  }

  $("a#new").click(function() {
    $("section").append("<div class='drag resize'><textarea>type here...</textarea></div>");
    $(".drag").draggable();
    $(".resize").resizable();
    return false;
  });

  $("a#save").click(function () {
      checkStorage(function () {localStorage.setItem("blobs", $("section").html());});
  });

  $("a#load").click(function () {
    checkStorage(function () {$("section").append(localStorage.getItem("blobs"));});
  });



});
