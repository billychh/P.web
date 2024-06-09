let slideindex = 1;
showSlide(slideindex);

function plusSlides(n) {
  showSlides((slideindex += n));
}

function currentSlide(n) {
  showSlides((slideindex = n));
}

function showSlides(n) {
  let i;
  let slide = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > plusSlides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slide.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i, dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";
}
