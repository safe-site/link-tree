<script>
window.addEventListener("scroll", function() {
  var header = document.getElementById("myHeader");
  if (window.pageYOffset > 20) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }
});
</script>
