import { createContext, useContext, useState } from "react";

const createAuth = createContext({ users: null, token: null });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ users: null, token: null });

  return (
    <createAuth.Provider value={{ user, setUser }}>
      {children}
    </createAuth.Provider>
  );
};

export const useAuth = () => useContext(createAuth);
