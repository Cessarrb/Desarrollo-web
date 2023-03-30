window.addEventListener("scroll", function () {
  var header = document.getElementById("nav-scroll");
  if (window.scrollY > 100) {
    header.style.background = "black";
  } else {
    header.style.background =
      "linear-gradient( to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) )";
  }
});
