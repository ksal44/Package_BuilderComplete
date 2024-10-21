import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Navbar.css'; // Import the updated CSS

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      {/* Navbar links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/packages">Package Builder</Link></li>
        <li><Link to="/company-tracker">Company Tracker</Link></li>
      </ul>

      {/* Logout button aligned to the far right */}
      {user && (
        <button onClick={logout} className="logout-button">
          Logout
        </button>
      )}
    </nav>
  );
}

export default Navbar;
