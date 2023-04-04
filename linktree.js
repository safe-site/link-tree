
  window.onload = function() {
  document.getElementById('myImage').addEventListener('click', function() {
    window.location.href = this.parentElement.href;
    this.parentElement.download = '';
    this.parentElement.click();
  });
};
