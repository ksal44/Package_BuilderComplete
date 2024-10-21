import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // No user initially

  const login = (email, password) => {
    // Built-in test user logic
    if (email === 'employee@example.com' && password === 'password') {
      const userData = { name: 'Test User', email: 'employee@example.com' };
      setUser(userData); // Set the user state
      return true; // Indicate success
    }
    alert('Invalid credentials');
    return false; // Indicate failure
  };

  const logout = () => setUser(null); // Clear user on logout

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
