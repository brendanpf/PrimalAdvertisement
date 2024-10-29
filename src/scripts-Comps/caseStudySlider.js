
export function initializeCaseStudySlider() {
    const slider = document.querySelector('.caseStudy-slider');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
  
    if (slider && prevButton && nextButton) {
      // Prevent multiple initializations
      if (slider.dataset.initialized) return;
      slider.dataset.initialized = 'true';
  
      let currentIndex = 0;
      const caseStudies = Array.from(slider.children);
      const totalCaseStudies = caseStudies.length;
  
      if (caseStudies.length === 0) return;
  
      function updateSliderPosition() {
        const caseStudyWidth = slider.clientWidth;
        slider.scrollTo({
          left: currentIndex * caseStudyWidth,
          behavior: 'smooth',
        });
      }
  
      prevButton.addEventListener('click', () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : totalCaseStudies - 1;
        updateSliderPosition();
      });
  
      nextButton.addEventListener('click', () => {
        currentIndex = currentIndex < totalCaseStudies - 1 ? currentIndex + 1 : 0;
        updateSliderPosition();
      });
  
      window.addEventListener('resize', updateSliderPosition);
    } else {
      console.error('Slider or control buttons not found in the DOM');
    }
  }