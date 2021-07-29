import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState('');

  return (
    <UserContext.Provider value={{ user, setUser, email, setEmail }} >
      { children }
    </UserContext.Provider>
  );
}

export const UserHook = () => useContext(UserContext);
