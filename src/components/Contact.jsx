// src/components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    alert('Message sent! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact container py-5">
      <section className="contact-hero text-center mb-5">
        <h1 className="display-4">Contact Us</h1>
        <p className="lead">We're here to help and answer any questions you might have.</p>
      </section>

      <div className="row">
        <div className="col-md-5 mb-4">
          <div className="contact-info card h-100 p-4">
            <h2 className="mb-4">Get in Touch</h2>
            <div className="contact-item mb-3">
              <p><i className="fas fa-map-marker-alt me-2"></i> 123 Healthcare Ave, Suite 500, Harare, Zim 02115</p>
            </div>
            <div className="contact-item mb-3">
              <p><i className="fas fa-phone me-2"></i> (263) 555-0123</p>
            </div>
            <div className="contact-item mb-3">
              <p><i className="fas fa-envelope me-2"></i> info@healthspot.com</p>
            </div>
            <div className="contact-item">
              <p><i className="fas fa-clock me-2"></i> Monday - Friday: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="col-md-7">
          <form className="contact-form card p-4" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;