
const carousel = document.getElementById('carousel');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const imgWidth = 250 + 20; // image width + gap
const visibleCount = 4;


function updateArrows() {
  leftArrow.disabled = carousel.scrollLeft === 0;
  rightArrow.disabled = carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth - 1;
  console.log('arrow disabled');

}

function scrollCarousel(direction) {
  carousel.scrollBy({
    left: direction * imgWidth * visibleCount,
    behavior: 'smooth'
  });
  setTimeout(updateArrows, 400); // Wait for scroll to finish
  console.log('scrolled');

  // leftArrow.addEventListener('click', () => scrollCarousel(-1));
  // rightArrow.addEventListener('click', () => scrollCarousel(1));
}

carousel.addEventListener('scroll', updateArrows);
window.addEventListener('load', updateArrows);

