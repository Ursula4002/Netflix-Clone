
const carousel = document.getElementById('carousel');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const carouselWrapper = document.querySelector('.carousel-wrapper');

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
}

carousel.addEventListener('scroll', updateArrows);
window.addEventListener('load', updateArrows);



carouselWrapper.addEventListener('wheel', (e) => {
  // e.preventDefault(); // 
  
  // Scroll horizontal ( basé sur le delta X de la molette )
  const scrollAmount = e.deltaX > 0 ? imgWidth * visibleCount : -imgWidth * visibleCount;
  
  carousel.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
  
  setTimeout(updateArrows, 400);
}, { passive: false });
