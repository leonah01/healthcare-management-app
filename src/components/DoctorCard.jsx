// src/components/DoctorCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <img src={doctor.image} alt={doctor.name} className="doctor-image" />
      <div className="doctor-info">
        <h3>{doctor.name}</h3>
        <p className="specialty">{doctor.specialty}</p>
        <p className="experience">{doctor.experience} years experience</p>
        <p className="fee">${doctor.fee} consultation fee</p>
        <p className="description">{doctor.description}</p>
        <Link to={'/doctors/${doctor.id}'} className="btn btn-primary">
          Book Appointment
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;