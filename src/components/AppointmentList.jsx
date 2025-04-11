import React from 'react';

const appointments = [
  {
    id: 1,
    patient: 'John Doe',
    age: 35,
    date: '2023-06-15',
    time: '10:00 AM',
    doctor: 'Dr. Sarah Johnson',
    fee: 150,
    status: 'Confirmed'
  },
  {
    id: 2,
    patient: 'Jane Smith',
    age: 28,
    date: '2023-06-16',
    time: '02:30 PM',
    doctor: 'Dr. Michael Chen',
    fee: 180,
    status: 'Pending'
  }
];

const AppointmentList = () => {
  return (
    <div className="appointment-list container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Appointments</h2>
        <button className="btn btn-primary">+ New Appointment</button>
      </div>
      
      <div className="card shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>Patient</th>
                <th>Age</th>
                <th>Date & Time</th>
                <th>Doctor</th>
                <th>Fee</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(appointment => (
                <tr key={appointment.id}>
                  <td>{appointment.patient}</td>
                  <td>{appointment.age}</td>
                  <td>{appointment.date} at {appointment.time}</td>
                  <td>{appointment.doctor}</td>
                  <td>${appointment.fee}</td>
                  <td>
                    <span className={` badge ${appointment.status === 'Confirmed' ? 'bg-success' : 'bg-warning'}` }>
                      {appointment.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-2">Edit</button>
                    <button className="btn btn-sm btn-outline-danger">Cancel</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppointmentList;