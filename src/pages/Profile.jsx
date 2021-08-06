import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/common/Footer';

const Profile = ({ history: { push } }) => {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const localStorageEmail = JSON.parse(localStorage.getItem('user'));
    if (localStorageEmail) {
      setUserEmail(localStorageEmail.email);
    } else {
      push('/');
    }
  }, []);
  return (
    <>
      <p data-testid="profile-email">{ userEmail }</p>
      <Footer />
    </>
  );
};

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Profile;
