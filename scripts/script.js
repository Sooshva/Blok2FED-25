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
const hamburgerButton = document.querySelector("#Main_Menu button");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const closeButton = hamburgerMenu.querySelector("button");


hamburgerButton.addEventListener("click", () => {
  hamburgerMenu.classList.add("show");
  document.body.classList.add("menu-open");
});


closeButton.addEventListener("click", () => {
  hamburgerMenu.classList.remove("show");
  document.body.classList.remove("menu-open");
});


document.addEventListener("click", (event) => {
  if (!hamburgerMenu.contains(event.target) && !hamburgerButton.contains(event.target)) {
    hamburgerMenu.classList.remove("show");
    document.body.classList.remove("menu-open");
  }
});


document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hamburgerMenu.classList.remove("show");
    document.body.classList.remove("menu-open");
  }
});


const progressBars = document.querySelectorAll('.Progres-bar');

progressBars.forEach((bar) => {
  const progress = bar.getAttribute('data-progress');
  bar.style.width = `${progress}%`;
});


document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector("#Main_Menu button img"); 
  const hamburgerMenu = document.querySelector("#hamburger-menu");
  const closeButton = document.querySelector("#hamburger-menu button img");

  hamburgerButton.addEventListener("click", () => {
    hamburgerMenu.hidden = false;
  });

  closeButton.addEventListener("click", () => {
    hamburgerMenu.hidden = true;
  });

});

// Bezorgbus animatie
const images = document.querySelectorAll('#PaarseBlokFooter #Bezorg');

images.forEach(img => {
  img.addEventListener('click', () => {
    img.classList.add('clicked');

    setTimeout(() => {
      img.classList.remove('clicked');
    }, 3000);
  });
});


// like animatie
const likeIcons = document.querySelectorAll('.like-icon');


likeIcons.forEach(likeIcon => {
  likeIcon.addEventListener('click', () => {

    likeIcon.classList.add('clicked');


    setTimeout(() => {
      likeIcon.classList.remove('clicked');
    }, 500);
  });
});

console.log("hallo wereld");

// ster animatie
const SterIcons = document.querySelectorAll('#Info-Ster');


SterIcons.forEach(likeIcon => {
  likeIcon.addEventListener('click', () => {

    SterIcons.classList.add('clicked');


    setTimeout(() => {
      SterIcons.classList.remove('clicked');
    }, 500);
  });
});


// certificaat animatie
const certificaat = document.querySelectorAll('#Certificaat');


certificaat.forEach(certificaat => {
  certificaat.addEventListener('click', () => {

    certificaat.classList.add('clicked');


    setTimeout(() => {
      certificaat.classList.remove('clicked');
    }, 500);
  });
});