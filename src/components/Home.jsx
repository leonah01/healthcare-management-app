import React from 'react';
import { Link } from 'react-router-dom';
import DoctorCard from './DoctorCard';

const featuredDoctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    experience: 12,
    fee: 150,
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    description: 'Harvard-trained cardiologist specializing in preventive care and complex interventions. Board certified with over a decade of experience.',
    rating: 4.9,
    reviews: 128
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    experience: 8,
    fee: 180,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    description: 'Expert in movement disorders and neurodegenerative diseases. Pioneer in minimally invasive neurosurgical techniques.',
    rating: 4.8,
    reviews: 94
  },
  {
    id: 3,
    name: 'Dr. Emily Wilson',
    specialty: 'Pediatrician',
    experience: 10,
    fee: 120,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    description: 'Specializing in adolescent medicine and childhood development. Compassionate care for children of all ages.',
    rating: 4.95,
    reviews: 215
  }
];

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your Health, <span className="highlight">Our Priority</span></h1>
          <p className="subtitle">Connecting you with top-rated specialists for personalized, compassionate care</p>
          <div className="hero-buttons">
            <Link to="/doctors" className="btn btn-primary">
              <i className="fas fa-calendar-check"></i> Book Appointment
            </Link>
            <Link to="/login" className="btn btn-secondary">
              <i className="fas fa-user-plus"></i> Create Account
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="number">200+</span>
              <span className="label">Qualified Doctors</span>
            </div>
            <div className="stat">
              <span className="number">98%</span>
              <span className="label">Patient Satisfaction</span>
            </div>
            <div className="stat">
              <span className="number">24/7</span>
              <span className="label">Support Available</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Doctor consultation" />
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="featured-doctors">
        <div className="section-header">
          <h2>Our <span className="highlight">Featured Specialists</span></h2>
          <p>Meet some of our top-rated healthcare providers</p>
        </div>
        <div className="doctors-grid">
          {featuredDoctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
        <div className="view-all">
          <Link to="/doctors" className="btn btn-outline">
            View All Doctors <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="section-header">
          <h2>Why <span className="highlight">Choose HealthSpot</span>?</h2>
          <p>We're revolutionizing healthcare access</p>
        </div>
        <div className="features">
          <div className="feature">
            <div className="icon-circle">
              <i className="fas fa-clock"></i>
            </div>
            <h3>Quick Appointments</h3>
            <p>Same-day availability with average wait times under 15 minutes at our partner clinics.</p>
          </div>
          <div className="feature">
            <div className="icon-circle">
              <i className="fas fa-user-md"></i>
            </div>
            <h3>Top Specialists</h3>
            <p>Our physicians are board-certified with an average of 10+ years experience.</p>
          </div>
          <div className="feature">
            <div className="icon-circle">
              <i className="fas fa-heart"></i>
            </div>
            <h3>Personalized Care</h3>
            <p>Treatment plans tailored to your unique health profile and lifestyle.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="section-header">
          <h2>Patient <span className="highlight">Success Stories</span></h2>
          <p>Hear from people who found care through HealthSpot</p>
        </div>
        <div className="testimonial-cards">
          <div className="testimonial">
            <div className="quote">"Found the perfect cardiologist who finally diagnosed my condition after years of uncertainty."</div>
            <div className="patient">
              <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Patient" />
              <div className="info">
                <h4>Sarah M.</h4>
                <p>Cardiology Patient</p>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <div className="quote">"The pediatrician was amazing with my kids - they actually look forward to checkups now!"</div>
            <div className="patient">
              <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Patient" />
              <div className="info">
                <h4>James T.</h4>
                <p>Parent</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;