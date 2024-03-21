let slide2Index = 0;
showSlides2();

function showSlides2() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slide2Index++;
  if (slide2Index > slides.length) {
    slide2Index = 1;
  }
  slides[slide2Index - 1].style.display = "block";
  setTimeout(showSlides2, 8000); // Change image every 3 seconds
}
