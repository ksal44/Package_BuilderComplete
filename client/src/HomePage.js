import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

function HomePage() {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      

        <nav>
          <ul>
            <li><Link to="/packages">Package Builder</Link></li>
            <li><Link to="/company-tracker">Company Tracker</Link></li>
          </ul>
        </nav>
        <button onClick={logout}>Log Out</button>
      </div>
  );

}

export default HomePage;
