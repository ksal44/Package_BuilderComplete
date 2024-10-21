import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Optional CSS

function HomePage() {

  return (
    <div className="homepage-container">
      <h1>Welcome to the Home Page</h1>

      <nav className="home-nav">
        <ul>
          <li><Link to="/packages">Package Builder</Link></li>
          <li><Link to="/company-tracker">Company Tracker</Link></li>
        </ul>
      </nav>

      <div className="schedule-box">
        <Link to="/appointment-scheduler">Schedule Census Meeting</Link>
      </div>
    </div>
  );
}

export default HomePage;
