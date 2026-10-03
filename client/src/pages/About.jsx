// About.js
import React from 'react';
import './css/About.css';

export const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Welcome to the Stray Animal Rescue System! Our mission is to provide
            a platform for rescuing and caring for stray animals. We believe in
            creating a community that works together to ensure the well-being of
            animals in need.
          </p>

          <h3>Our Mission</h3>
          <p>
            Our proposal commits to a perspective where animal lives matter.
            Protection, care, empathy would be equally distributed by the shelter
            system without any profits. On this report, design and analysis have
            been applied to the demo version of the adoption and fostering system.
          </p>

          <h3>How We Help</h3>
          <ul>
            <li>Rescue and rehabilitation of stray animals</li>
            <li>Providing medical care and vaccinations</li>
            <li>Facilitating adoptions to loving homes</li>
            <li>Community awareness and education programs</li>
          </ul>

          <h3>Why Choose Stray Animal Rescue System?</h3>
          <p>
            At Stray Animal Rescue System, we stand out for our commitment to
            providing a safe and caring environment for stray animals. Here's why
            you should choose us:
          </p>
          <ul>
            <li>Experienced and compassionate team</li>
            <li>State-of-the-art animal care facilities</li>
            <li>Transparent adoption process</li>
            <li>Continuous community engagement</li>
            <li>Impactful educational initiatives</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
