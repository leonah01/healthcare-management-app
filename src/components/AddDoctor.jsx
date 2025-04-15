import React, { useState } from 'react';

const AddDoctor = () => {
  const [doctor, setDoctor] = useState({
    name: '',
    specialty: '',
    contact: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend API
    console.log('Doctor data submitted:', doctor);
    alert('Doctor added successfully!');
    
    // Reset form
    setDoctor({
      name: '',
      specialty: '',
      contact: '',
      email: ''
    });
  };

  return (
    <div className="add-doctor-form">
      <h2>Add New Doctor</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={doctor.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Specialty:</label>
          <input
            type="text"
            name="specialty"
            value={doctor.specialty}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Contact Number:</label>
          <input
            type="tel"
            name="contact"
            value={doctor.contact}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={doctor.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="submit-btn">Add Doctor</button>
      </form>
    </div>
  );
};

export default AddDoctor;