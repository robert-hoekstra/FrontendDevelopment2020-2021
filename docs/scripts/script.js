// JavaScript Document
let toggleButton = document.querySelector('#toggleMenu');
console.log(toggleButton)

toggleButton.addEventListener("click", toggleMenu)

function toggleMenu(){
    let mobileMenu = document.querySelector("nav");
    mobileMenu.classList.toggle("show")
}

let scrollButton = document.getElementById('scrollButton')

scrollButton.addEventListener("click", scrollToTop)

function scrollToTop(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
// Onderstaande code kijkt naar de hoogte van de body view. als deze een bepaalt punt voorbij is dan wordt de display stijl aangepast zodat de knop zicht baar is.
// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp


window.addEventListener("scroll", scrollFunction)
function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}



