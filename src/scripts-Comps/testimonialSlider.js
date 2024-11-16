
export function initializeTestimonialSlider() {
    const slider = document.querySelector('.testimonial-slider');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
  
    // Ensure all required elements are available in the DOM.
    if (slider && prevButton && nextButton) {
      // Prevent multiple initializations
      if (slider.dataset.initialized) return;
      slider.dataset.initialized = 'true'; // Mark the slider as initialized.
  
      let currentIndex = 0; // Track the index of the currently visible testimonial.
      const testimonials = Array.from(slider.children);
      const totalTestimonials = testimonials.length;
  
      // Exit early if no testimonials are present.
      if (testimonials.length === 0) return;
  
      function updateSliderPosition() {
        const testimonialWidth = slider.clientWidth; // Get the width of the slider to calculate the position.
        slider.scrollTo({
          left: currentIndex * testimonialWidth, // Scroll to the appropriate position for the current index.
          behavior: 'smooth', // Smooth scrolling for better user experience.
        });
      }
  
      // Event listener for the "Previous" button.
      prevButton.addEventListener('click', () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : totalTestimonials - 1;
        updateSliderPosition();
      });
  
      // Event listener for the "Next" button.
      nextButton.addEventListener('click', () => {
        currentIndex = currentIndex < totalTestimonials - 1 ? currentIndex + 1 : 0;
        updateSliderPosition();
      });
  
      window.addEventListener('resize', updateSliderPosition);
    } else {
      console.error('Slider or control buttons not found in the DOM');
    }
  }  