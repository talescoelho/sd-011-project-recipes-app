import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <Link
        data-testid="profile-done-btn"
        to="/receitas-feitas"
      >
        Receitas Feitas
      </Link>
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
