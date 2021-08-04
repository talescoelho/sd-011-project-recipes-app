import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');

  const contextValues = {
    user,
    email,
    setUser,
    setEmail,
  };

  return (
    <UserContext.Provider value={ contextValues }>
      { children }
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const UserHook = () => useContext(UserContext);
