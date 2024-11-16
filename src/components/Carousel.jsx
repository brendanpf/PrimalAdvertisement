
import React, { useEffect } from 'react'; // Import React and the useEffect hook for side effects.
import '../styles/Carousel.css';
import { initializeCaseStudySlider } from '../scripts-Comps/caseStudySlider'; // Import the slider initialization function.

export default function Carousel() {
  useEffect(() => {
    // useEffect ensures the slider initialization code only runs on the client side.
    if (typeof window !== 'undefined') {
      initializeCaseStudySlider(); // Initializes the custom slider functionality when the component mounts.
    }
  }, []);

  return (
    <div className="caseStudy-section">
      <h1 className="caseStudy-header">Case Study</h1>

      <div className="caseStudy-slider">
        {/* Each case study item contains an image. Images are part of the slider and are styled as such. */}
        <div className="caseStudy-item">
          <img
            src="/assets/caseStudy/case-study-1.jpg"
            alt="Case Study 1"
            className="caseStudy-showcase-image"
          />
        </div>

        <div className="caseStudy-item">
          <img
            src="/assets/caseStudy/case-study-2.jpg"
            alt="Case Study 2"
            className="caseStudy-showcase-image"
          />
        </div>

        <div className="caseStudy-item">
          <img
            src="/assets/caseStudy/case-study-3.jpg"
            alt="Case Study 3"
            className="caseStudy-showcase-image"
          />
        </div>

        <div className="caseStudy-item">
          <img
            src="/assets/caseStudy/case-study-4.jpg"
            alt="Case Study 4"
            className="caseStudy-showcase-image"
          />
        </div>

        <div className="caseStudy-item">
          <img
            src="/assets/caseStudy/case-study-5.jpg"
            alt="Case Study 5"
            className="caseStudy-showcase-image"
          />
        </div>

        <div className="caseStudy-item">
          <img
            src="/assets/caseStudy/case-study-6.jpg"
            alt="Case Study 6"
            className="caseStudy-showcase-image"
          />
        </div>

        <div className="caseStudy-item">
          <img
            src="/assets/caseStudy/case-study-7.jpg"
            alt="Case Study 7"
            className="caseStudy-showcase-image"
          />
        </div>

        <div className="caseStudy-item">
          <img
            src="/assets/caseStudy/case-study-8.jpg"
            alt="Case Study 8"
            className="caseStudy-showcase-image"
          />
        </div>

        <div className="caseStudy-item">
          <img
            src="/assets/caseStudy/case-study-9.jpg"
            alt="Case Study 9"
            className="caseStudy-showcase-image"
          />
        </div>

        <div className="caseStudy-item">
          <img
            src="/assets/caseStudy/case-study-10.jpg"
            alt="Case Study 10"
            className="caseStudy-showcase-image"
          />
        </div>

        <div className="caseStudy-item">
          <img
            src="/assets/caseStudy/case-study-11.jpg"
            alt="Case Study 11"
            className="caseStudy-showcase-image"
          />
        </div>

        <div className="caseStudy-item-link">
           {/* This item is unique because it contains a clickable link wrapping the image. */}
          <a href="/freeinstacall/">
            <img
              src="/assets/caseStudy/case-study-12.jpg"
              alt="Case Study 12"
              className="caseStudy-showcase-image"
            />
          </a>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="caseStudy-controls">
        <button className="prev-button">Previous</button>
        <button className="next-button">Next</button>
      </div>
    </div>
  );
}
