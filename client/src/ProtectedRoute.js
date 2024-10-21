import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function ProtectedRoute({ children }) {
  const { user } = useAuth(); // Access the user from context

  if (!user) {
    return <Navigate to="/signin" replace />; // Redirect if not logged in
  }

  return children; // Render the child component if logged in
}

export default ProtectedRoute;
