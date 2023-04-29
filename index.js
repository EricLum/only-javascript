document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("percent").addEventListener("change", validate);
  function validate(e) {
    var value = e.target.value;
    if (value > 100 || value < 0) {
      alert("you can't do that");
    }
  }
});
