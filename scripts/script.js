// Paarse timer banner
let t = 0;
const text = document.querySelectorAll("#paarse-banner li"); 
const time = 4000; 

function changeTxt() {
  const currentSlide = text[t];
  
  const nextSlideIndex = (t + 1) % text.length;
  const nextSlide = text[nextSlideIndex];
  
  currentSlide.classList.remove("active");

  nextSlide.classList.add("active");

  t = nextSlideIndex;

  setTimeout(changeTxt, time);
}

changeTxt();

// Hamburger-menu
// Zoek de elementen op
const hamburgerButton = document.querySelector("#Main_Menu button");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const closeButton = hamburgerMenu.querySelector("button"); // Sluitknop

// Open het menu bij klikken op de hamburgerbutton
hamburgerButton.addEventListener("click", () => {
  hamburgerMenu.classList.add("show");
  document.body.classList.add("menu-open"); // Voorkom scrollen
});

// Sluit het menu bij klikken op de sluitknop
closeButton.addEventListener("click", () => {
  hamburgerMenu.classList.remove("show");
  document.body.classList.remove("menu-open");
});

// Bonus: Sluit het menu bij klikken buiten het menu
document.addEventListener("click", (event) => {
  if (!hamburgerMenu.contains(event.target) && !hamburgerButton.contains(event.target)) {
    hamburgerMenu.classList.remove("show");
    document.body.classList.remove("menu-open");
  }
});

// Bonus: Sluit het menu met de Escape-toets
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hamburgerMenu.classList.remove("show");
    document.body.classList.remove("menu-open");
  }
});

// Review-balkjes 
const progressBars = document.querySelectorAll('.Progres-bar');

progressBars.forEach((bar) => {
  const progress = bar.getAttribute('data-progress'); 
  bar.style.width = `${progress}%`;
});


document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector("#Main_Menu button img"); // Zorg dat de juiste button wordt geselecteerd
  const hamburgerMenu = document.querySelector("#hamburger-menu");
  const closeButton = document.querySelector("#hamburger-menu button img");

  hamburgerButton.addEventListener("click", () => {
    hamburgerMenu.hidden = false; 
  });

  closeButton.addEventListener("click", () => {
    hamburgerMenu.hidden = true; 
  });


  console.log("hallo wereld");
});
