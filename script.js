// images slider

const images = [
  './images/FC35AD5F-2CCB-4A07-985E-006767CEA396.JPG.jpeg',
  './images/me.jpeg',
  './images/me2.jpeg',
  './images/me3.jpeg',
   './images/IMG_3400.JPG.jpeg',
];

let index = 0;

window.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('slider');

  if (!slider) {
    console.error("Slider element with ID 'slider' not found.");
    return;
  }

  function changeImage() {
    // Start fade out
    slider.style.opacity = 0;

    setTimeout(() => {
      index++;

      if (index >= images.length) {
        index = 0;
      }

      // Wait for the new image to load before fading it back in
      slider.onload = () => {
        slider.style.opacity = 1;
      };
      slider.src = images[index];
    }, 500); // Slight delay to allow fade out to complete
  }

  /* change every 3 seconds */
  setInterval(changeImage, 3000);
});
