// JavaScript Document
let toggleButton = document.querySelector('#toggleMenu');
console.log(toggleButton)

toggleButton.addEventListener("click", toggleMenu)

function toggleMenu(){
    let mobileMenu = document.querySelector("nav");
    mobileMenu.classList.toggle("show")
}