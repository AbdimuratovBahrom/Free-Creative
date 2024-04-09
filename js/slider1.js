

var slide1Index = 1;
showSlides(slide1Index);

function plusSlides(n) {
  showSlides(slide1Index += n);
}

function currentSlide(n) {
  showSlides(slide1Index = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slide1Index = 1}    
  if (n < 1) {slide1Index = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide1Index-1].style.display = "block";  
  dots[slide1Index-1].className += " active";
}
