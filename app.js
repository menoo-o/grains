document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.hero img');
    const tagline = document.querySelector('.tagline');
    const nextArrow = document.querySelector('.fa-arrow-right');
    const prevArrow = document.querySelector('.fa-arrow-left');
    let currentImageIndex = 0;
  
    // Show the first image initially
    images[currentImageIndex].classList.add('active');
  
    // Function to switch images
    function switchImage(next = true) {
      images[currentImageIndex].classList.remove('active');
      if (next) {
        currentImageIndex = (currentImageIndex + 1) % images.length;
      } else {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      }
      images[currentImageIndex].classList.add('active');
      
      // Show or hide the tagline based on the active image
      if (currentImageIndex === 1) {
        tagline.style.display = 'block';
      } else {
        tagline.style.display = 'none';
      }
    }
  
    // Add event listeners for arrows
    nextArrow.addEventListener('click', () => switchImage(true));
    prevArrow.addEventListener('click', () => switchImage(false));
  
    // Automatically switch images every 2 seconds
    setInterval(() => switchImage(true), 2000);
  });
  