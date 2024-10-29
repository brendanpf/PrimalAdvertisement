
export function initializeTestimonialSlider() {
    const slider = document.querySelector('.testimonial-slider');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
  
    if (slider && prevButton && nextButton) {
      // Prevent multiple initializations
      if (slider.dataset.initialized) return;
      slider.dataset.initialized = 'true';
  
      let currentIndex = 0;
      const testimonials = Array.from(slider.children);
      const totalTestimonials = testimonials.length;
  
      if (testimonials.length === 0) return;
  
      function updateSliderPosition() {
        const testimonialWidth = slider.clientWidth;
        slider.scrollTo({
          left: currentIndex * testimonialWidth,
          behavior: 'smooth',
        });
      }
  
      prevButton.addEventListener('click', () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : totalTestimonials - 1;
        updateSliderPosition();
      });
  
      nextButton.addEventListener('click', () => {
        currentIndex = currentIndex < totalTestimonials - 1 ? currentIndex + 1 : 0;
        updateSliderPosition();
      });
  
      window.addEventListener('resize', updateSliderPosition);
    } else {
      console.error('Slider or control buttons not found in the DOM');
    }
  }  