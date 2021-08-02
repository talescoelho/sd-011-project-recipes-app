import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState('');

  return (
    <UserContext.Provider value={ { user, setUser, email, setEmail } }>
      { children }
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const UserHook = () => useContext(UserContext);
