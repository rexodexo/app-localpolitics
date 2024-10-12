import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (username: string, email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  logout: () => {},
  signup: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // In a real application, you would make an API call to authenticate the user
    // For this example, we'll just simulate a successful login
    const newUser = { username: email.split('@')[0], email };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    navigate('/home');
  };

  const signup = async (username: string, email: string, password: string) => {
    // In a real application, you would make an API call to register the user
    // For this example, we'll just simulate a successful signup
    const newUser = { username, email };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    navigate('/home');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};