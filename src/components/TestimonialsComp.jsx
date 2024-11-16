
import React, { useEffect } from 'react'; // Import React and the `useEffect` hook.
import '../styles/TestimonialsComp.css'; // Import the CSS file for styling the testimonials section.

export default function TestimonialsComp() {
  // useEffect to initialize the testimonial slider script on component mount.
  useEffect(() => {
    import('../scripts-Comps/testimonialSlider') // Dynamically import the slider script.
    .then(({ initializeTestimonialSlider }) => {
      initializeTestimonialSlider(); // Call the initialization function once the script is loaded.
    });
  }, []);

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-header">What Our Clients Say About Us</h2>

      <div className="testimonial-slider">
        {/* Testimonial 1 */}
        <div className="testimonial-item">
          <img src="/assets/christie.jpg" alt="Client 1" className="testimonial-image" />
          <div className="testimonial-content">
            <p>
              "Since starting to work with Ethan recently, his professional
              manner, knowledge and attention to detail has really put
              my worries to bed with posting on social media, as I had
              no previous experience with it. His help and guidance with
              idea generation and content creation has taken the stress
              from me so I can focus on building a client base and
              progress my business. I’ve managed to onboard my first
              client with his help and the future looks bright."
            </p>
            <div className="testimonial-rating">
              <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span> {/* Unicode stars for rating */}
            </div>
            <p className="testimonial-name">- Christy Costello</p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial-item">
          <img src="/assets/paul.jpg" alt="Client 2" className="testimonial-image" />
          <div className="testimonial-content">
            <p>
              "I struggled with creating content and starting my online
              business all in one, with this my engagement was low
              and I barely had any interest in my service. Once Ethan
              came on board my content began to reach a wider
              audience with viral content and a professional looking
              presence. I managed to gain many clients from his help
              as they stated they came across my service via Instagram
              & TikTok content."
            </p>
            <div className="testimonial-rating">
              <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
            </div>
            <p className="testimonial-name">- Paul Keane</p>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="testimonial-controls">
        <button className="prev-button">Previous</button>
        <button className="next-button">Next</button>
      </div>
    </div>
  );
}