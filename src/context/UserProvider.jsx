import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';
import APImeals from '../services/APImealsANDdrinks';

function UserProvider({ children }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const callAPImeals = async () => {
      const callAPI = await APImeals();
      setMeals(callAPI);
    };
    callAPImeals();
  }, []);

  return (
    <UserContext.Provider value={ meals }>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
