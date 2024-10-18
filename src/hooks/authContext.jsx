import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // W.I.P

  return (
    <AuthContext.Provider value={{ sendSingInEmail, isLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
