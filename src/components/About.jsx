// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About HealthSpot</h1>
        <p>Connecting patients with top healthcare professionals</p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          HealthSpot was founded with the goal of making healthcare more accessible and convenient. 
          We believe that everyone deserves quick access to quality medical care, and we're 
          committed to breaking down barriers between patients and doctors.
        </p>
      </section>

      <section className="stats">
        <div className="stat-item">
          <h3>200+</h3>
          <p>Qualified Doctors</p>
        </div>
        <div className="stat-item">
          <h3>50,000+</h3>
          <p>Patients Served</p>
        </div>
        <div className="stat-item">
          <h3>98%</h3>
          <p>Patient Satisfaction</p>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Find a Doctor</h3>
            <p>Browse our network of specialists and find the right doctor for your needs.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Book an Appointment</h3>
            <p>Select a convenient time slot that works with your schedule.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Get Treated</h3>
            <p>Visit the doctor and receive personalized medical care.</p>
          </div>
        </div>
      </section>

      <section className="team">
        <h2>Meet Our Founders</h2>
        <div className="founders">
          <div className="founder">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Founder 1" />
            <h3>Dr. Amanda Smith</h3>
            <p>Chief Medical Officer</p>
          </div>
          <div className="founder">
            <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="Founder 2" />
            <h3>David Johnson</h3>
            <p>CEO & Co-founder</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;