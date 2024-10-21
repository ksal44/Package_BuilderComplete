import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import PackagePage from './packagePage';
import HomePage from './HomePage';
import SignInPage from './SignInPage';
import CompanyTrackerPage from './CompanyTrackerPage';
import AppointmentSchedulerPage from './AppointmentSchedulerPage'; // Import new page
import { AuthProvider } from './AuthContext';
import Navbar from './Navbar';
import ProtectedRoute from './ProtectedRoute';
import logo from './images/logo.png';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/myfunction')
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="whole-page">
          <header className="header">
            <img src={logo} alt="Empower Insurance Group Logo" className="header-logo" />
          </header>

          <Navbar />

          <div className="content">
            <Routes>
              <Route path="/signin" element={<SignInPage />} />
              <Route 
                path="/" 
                element={
                  <ProtectedRoute>
                    <HomePage message={message} />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/packages" 
                element={
                  <ProtectedRoute>
                    <PackagePage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/company-tracker" 
                element={
                  <ProtectedRoute>
                    <CompanyTrackerPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/appointment-scheduler" 
                element={
                  <ProtectedRoute>
                    <AppointmentSchedulerPage />
                  </ProtectedRoute>
                } 
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
