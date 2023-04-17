window.addEventListener("scroll", function() {
  var header = document.getElementById("myHeader");
  if (window.pageYOffset > 100) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }
});

