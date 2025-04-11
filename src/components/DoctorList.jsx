// src/components/DoctorList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import DoctorCard from './DoctorCard';

const doctorsData = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    experience: 12,
    fee: 150,
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    description: 'Specialized in heart diseases and cardiovascular treatments.'
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    experience: 8,
    fee: 180,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    description: 'Expert in nervous system disorders and brain conditions.'
  },
  {
    id: 3,
    name: 'Dr. Emily Wilson',
    specialty: 'Pediatrician',
    experience: 10,
    fee: 120,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    description: 'Dedicated to children\'s health from infancy through adolescence.'
  },
  {
    id: 4,
    name: 'Dr. Robert Davis',
    specialty: 'Orthopedic Surgeon',
    experience: 15,
    fee: 200,
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    description: 'Specializes in musculoskeletal system, joints, and sports injuries.'
  },
  {
    id: 5,
    name: 'Dr. Lisa Park',
    specialty: 'Dermatologist',
    experience: 7,
    fee: 130,
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
    description: 'Expert in skin conditions, cosmetic procedures, and skin cancer prevention.'
  },
  {
    id: 6,
    name: 'Dr. James Rodriguez',
    specialty: 'General Practitioner',
    experience: 20,
    fee: 100,
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    description: 'Provides comprehensive primary care for patients of all ages.'
  }
];

const DoctorList = ({ adminView = false }) => {
  return (
    <div className="doctor-list">
      <h1>{adminView ? 'Manage Doctors' : 'Our Doctors'}</h1>
      {adminView && (
        <Link to="/dashboard/add-doctor" className="btn btn-primary">
          Add New Doctor
        </Link>
      )}
      
      <div className="doctors-grid">
        {doctorsData.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorList;