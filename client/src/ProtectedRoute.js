import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function ProtectedRoute({ element }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/signin" />;
}

export default ProtectedRoute;
