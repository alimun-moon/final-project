// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("sticky");

// Get the offset position of the navbar
var stky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > stky) {
    header.classList.add("stky");
  } else {
    header.classList.remove("stky");
  }
}
