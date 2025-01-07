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


