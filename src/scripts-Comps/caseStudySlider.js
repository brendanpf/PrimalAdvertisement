
export function initializeCaseStudySlider() {
    const slider = document.querySelector('.caseStudy-slider'); // Select the slider container.
    const prevButton = document.querySelector('.prev-button'); // Select the "Previous" button.
    const nextButton = document.querySelector('.next-button'); // Select the "Next" button.
  
    // Ensure all required elements are available
    if (slider && prevButton && nextButton) {
      // Prevent multiple initializations
      if (slider.dataset.initialized) return;
      slider.dataset.initialized = 'true'; // Mark the slider as initialized.
  
      let currentIndex = 0; // Current index of the active case study.
      const caseStudies = Array.from(slider.children);
      const totalCaseStudies = caseStudies.length;
  
      // Exit if there are no case studies to display
      if (caseStudies.length === 0) return;
  
      function updateSliderPosition() {
        const caseStudyWidth = slider.clientWidth;
        slider.scrollTo({
          left: currentIndex * caseStudyWidth,
          behavior: 'smooth', // Enable smooth scrolling for a better user experience.
        });
      }
  
      // Event listener for the "Previous" button
      prevButton.addEventListener('click', () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : totalCaseStudies - 1;
        updateSliderPosition();
      });
  
      // Event listener for the "Next" button
      nextButton.addEventListener('click', () => {
        currentIndex = currentIndex < totalCaseStudies - 1 ? currentIndex + 1 : 0;
        updateSliderPosition();
      });
  
      // Update slider position on window resize to ensure correct alignment
      window.addEventListener('resize', updateSliderPosition);
    } else {
      console.error('Slider or control buttons not found in the DOM');
    }
  }