import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Check if the user is already logged in by verifying the token
    const checkUserLoggedIn = async () => {
      try {
        const response = await axios.get('http://localhost:8000/profile', {
          withCredentials: true,
        });
        setUser(response.data);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkUserLoggedIn();
  }, []);

  const login = async (email, password) => {
    const response = await axios.post('http://localhost:8000/login', { email, password }, {
      withCredentials: true,
    });
    setUser(response.data);

    console.log(user)
  };

  const logout = async () => {
    await axios.post('http://localhost:8000/logout', {}, {
      withCredentials: true,
    });
    setUser(null);
    console.log(user)
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout ,setUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };