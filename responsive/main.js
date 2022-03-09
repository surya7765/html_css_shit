function toggleMaker0() {
  var toggleElement = document.getElementById("toggleId0")
  if(toggleElement.innerHTML === "change_history") {
    toggleElement.innerHTML = "close";
  }
  else {
    toggleElement.innerHTML = "change_history";
  }
}
function toggleMaker1() {
  var toggleElement = document.getElementById("toggleId1")
  if(toggleElement.innerHTML === "change_history") {
    toggleElement.innerHTML = "close";
  }
  else {
    toggleElement.innerHTML = "change_history";
  }
}
function toggleMaker2() {
  var toggleElement = document.getElementById("toggleId2")
  if(toggleElement.innerHTML === "change_history") {
    toggleElement.innerHTML = "close";
  }
  else {
    toggleElement.innerHTML = "change_history";
  }
}
function toggleMaker3() {
  var toggleElement = document.getElementById("toggleId3")
  if(toggleElement.innerHTML === "change_history") {
    toggleElement.innerHTML = "close";
  }
  else {
    toggleElement.innerHTML = "change_history";
  }
}

$(document).ready(function() {
    $(document).click(function(e) {
      $('.link.activeLink').removeClass('activeLink')
    });

    $('.link').click(function(e) {
      e.preventDefault();
      $('.link.activeLink').removeClass('activeLink')
      $(this).toggleClass('activeLink');
    });
});
