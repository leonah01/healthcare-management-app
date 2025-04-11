// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import DoctorList from './components/DoctorList';
import DoctorProfile from './components/DoctorProfile';
import Dashboard from './components/Dashboard';
import AppointmentList from './components/AppointmentList';
import AddDoctor from './components/AddDoctor';
import LoginSignup from './components/LoginSignup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('patient'); // 'patient' or 'admin'

  return (
    <Router>
      <div className="app">
        <Header isLoggedIn={isLoggedIn} userType={userType} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/doctors/:id" element={<DoctorProfile />} />
          <Route path="/login" element={<LoginSignup setIsLoggedIn={setIsLoggedIn} setUserType={setUserType} />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="appointments" element={<AppointmentList />} />
            <Route path="add-doctor" element={<AddDoctor />} />
            <Route path="doctors-list" element={<DoctorList adminView={true} />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;