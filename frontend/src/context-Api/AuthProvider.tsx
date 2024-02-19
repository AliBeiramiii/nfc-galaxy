import React, { createContext, useState, useContext } from 'react';

// Define the type for the authentication context
interface AuthContextType {
  authData: { user: string; pass: string, firstname: string, lastname: string, mobile: string, email: string  };
  setAuthData: React.Dispatch<React.SetStateAction<{ user: string; pass: string, firstname: string, lastname: string, mobile: string, email: string }>>;
}

// Create the authentication context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to access the authentication context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Define the type for the props of AuthProvider
interface AuthProviderProps {
  children: React.ReactNode; // Define children prop here
}

// Create the AuthProvider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authData, setAuthData] = useState({ user: '', pass: 'root1234', firstname: 'علی', lastname: '', mobile: '', email: '' });

  // Value to be provided by the context
  const authContextValue: AuthContextType = {
    authData,
    setAuthData,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export default AuthContext;
