
  window.addEventListener("load", function() {
  var img = document.querySelector("header img");
  var link = document.createElement("a");
  link.href = img.src;
  link.download = "header-img";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// function to add a click listener to the WhatsApp floating button
function addWhatsAppListener() {
  const waBtn = document.querySelector(".floating-button");
  waBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const message = "Hi, Shashi";
    const number = "919508914855";
    const url = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
  });
}

// call the function to add the WhatsApp click listener
addWhatsAppListener();

