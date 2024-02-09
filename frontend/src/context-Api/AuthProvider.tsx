import React, { createContext, useState, ReactNode } from "react";

interface AuthContextType {
  auth: any; // Replace 'any' with the actual type of auth object
  setAuth: React.Dispatch<React.SetStateAction<any>>; // Replace 'any' with the actual type of auth object
}

const AuthContext = createContext<AuthContextType>({ auth: {}, setAuth: () => {} });

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;