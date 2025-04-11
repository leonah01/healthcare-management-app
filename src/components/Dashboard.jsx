import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="/dashboard/appointments" className="nav-link text-white">
                    <i className="fas fa-calendar-alt me-2"></i>
                    Appointments
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/doctors-list" className="nav-link text-white">
                    <i className="fas fa-user-md me-2"></i>
                    Doctors List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/add-doctor" className="nav-link text-white">
                    <i className="fas fa-plus-circle me-2"></i>
                    Add Doctor
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;