import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PackagePage from './packagePage';
import HomePage from './HomePage';
import SignInPage from './SignInPage';
import CompanyTrackerPage from './CompanyTrackerPage';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import logo from './images/logo.png';
// import { buildBronzePackage, buildSilverPackage, buildGoldPackage } from './functions';

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/myfunction')
      .then(response => response.text())
      .then(data => {
        console.log(data, "app is Listening!!!!!");
        setMessage(data);  // Store the fetched message in state
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='whole-page'>
    <header className="header">
        <img src={logo} alt="Empower Insurance Group Logo" className="header-logo" />
    </header>
    <nav className="navbar">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/agent-reports">Agent Reports</a></li>
            <li><a href="/package-builder">Package Builder</a></li>
        </ul>
    </nav>
    <AuthProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/" element={<ProtectedRoute element={<HomePage message={message} />} />} />
            <Route path="/packages" element={<ProtectedRoute element={<PackagePage />} />} />
            <Route path="/company-tracker" element={<ProtectedRoute element={<CompanyTrackerPage />} />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;