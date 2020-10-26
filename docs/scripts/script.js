//// JavaScript Document for micro interactions home and webpage

// Variables
let toggleButton = document.querySelector("#toggleMenu");
let scrollButton = document.getElementById("scrollButton");

// Event listeners
scrollButton.addEventListener("click", scrollToTop);
window.addEventListener("scroll", scrollFunction);
toggleButton.addEventListener("click", toggleMenu);

// functions

function toggleMenu() {
  let mobileMenu = document.querySelector("nav");
  mobileMenu.classList.toggle("show");
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// Onderstaande code kijkt naar de hoogte van de body view. als deze een bepaalt punt voorbij is dan wordt de display stijl aangepast zodat de knop zicht baar is.
// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

function scrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}
