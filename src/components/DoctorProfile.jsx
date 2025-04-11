// src/components/DoctorProfile.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const doctorsData = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    experience: 12,
    fee: 150,
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    description: 'Specialized in heart diseases and cardiovascular treatments.',
    about: 'Dr. Johnson graduated from Harvard Medical School and completed her residency at Johns Hopkins Hospital. She has published numerous papers on cardiovascular health.',
    address: '123 Medical Center Dr, Suite 200, Boston, MA 02115',
    email: 's.johnson@healthspot.com',
    phone: '(617) 555-0123'
  },
  // ... other doctors
];

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = doctorsData.find(doc => doc.id === parseInt(id));
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  const availableTimes = ['09:00 AM', '10:30 AM', '12:00 PM', '02:00 PM', '03:30 PM', '05:00 PM'];

  const handleBooking = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    alert('Appointment booked with ${doctor.name} on ${selectedDate} at ${selectedTime}');
  };

  return (
    <div className="doctor-profile">
      <div className="doctor-header">
        <img src={doctor.image} alt={doctor.name} className="profile-image" />
        <div className="doctor-basic-info">
          <h1>{doctor.name}</h1>
          <p className="specialty">{doctor.specialty}</p>
          <p className="experience">{doctor.experience} years of experience</p>
          <p className="fee">Consultation fee: ${doctor.fee}</p>
          <div className="rating">
            <span className="stars">★★★★★</span>
            <span className="review-count">128 reviews</span>
          </div>
        </div>
      </div>

      <div className="doctor-details">
        <div className="about-section">
          <h2>About Dr. {doctor.name.split(' ')[1]}</h2>
          <p>{doctor.about}</p>
        </div>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><i className="fas fa-map-marker-alt"></i> {doctor.address}</p>
          <p><i className="fas fa-phone"></i> {doctor.phone}</p>
          <p><i className="fas fa-envelope"></i> {doctor.email}</p>
        </div>
      </div>

      <div className="booking-section">
        <h2>Book an Appointment</h2>
        <form onSubmit={handleBooking}>
          <div className="form-group">
            <label htmlFor="appointment-date">Date:</label>
            <input
              type="date"
              id="appointment-date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="appointment-time">Time:</label>
            <select
              id="appointment-time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              required
            >
              <option value="">Select a time</option>
              {availableTimes.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Confirm Appointment (${doctor.fee})
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorProfile;