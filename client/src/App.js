import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PackagePage from './packagePage';
import HomePage from './HomePage';
import SignInPage from './SignInPage';
import CompanyTrackerPage from './CompanyTrackerPage';
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
    <Router>
    <div>
    <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/company-tracker" element={<CompanyTrackerPage />} />
          <Route path="/packages" element={<PackagePage />} />
        </Routes>
          </div>
    </Router>

  );
}

export default App;