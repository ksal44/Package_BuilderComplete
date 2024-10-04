import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Insurance Package Builder</h1>
      <nav>
        <ul>
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/packages">View Packages</Link></li>
          <li><Link to="/company-tracker">Company Tracker</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
