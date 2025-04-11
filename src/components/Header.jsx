import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">HealthSpot</Link>
        <nav>
          <ul className="nav-links">
            <li>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li>
              <Link className="nav-link" to="/doctors">Doctors</Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li>
              <Link className="nav-link login-nav-link" to="/login">Login</Link>
            </li>
            <li>
              <Link className="nav-link dashboard-nav-link" to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;