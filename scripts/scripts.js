document.addEventListener("DOMContentLoaded", function() {
  console.log("Script loaded and DOM ready!");

  const btn = document.getElementById("say-hi");
  const msg = document.getElementById("message");

  btn.addEventListener("click", function() {
    msg.style.display = "block";
    console.log("Hello message shown!");
    setTimeout(() => {
      msg.style.display = "none";
    }, 2000);
  });
});