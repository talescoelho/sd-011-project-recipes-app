import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [state, setstate] = useState('');
  const globalState = { state, setstate };

  return (
    <UserContext.Provider value={ globalState }>
      {children}
    </UserContext.Provider>
  );
}
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
