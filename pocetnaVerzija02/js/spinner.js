document.querySelector(".spinner .container").style.display = "none";
document.querySelector(".spinner").classList.add("spinner-3");

// Mimic Server Request
setTimeout(() => {
  document.querySelector(".spinner").classList.remove("spinner-3");
  document.querySelector(".spinner .container").style.display = "block";
}, 150);
