// src/components/Carousel.jsx

import React, { useEffect } from 'react';
import '../styles/Carousel.css';
import { initializeCaseStudySlider } from '../scripts-Comps/caseStudySlider';

export default function Carousel() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      initializeCaseStudySlider();
    }
  }, []);

  return (
    <div className="caseStudy-section">
      <h1 className="caseStudy-header">Case Study</h1>

      <div className="caseStudy-slider">
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
