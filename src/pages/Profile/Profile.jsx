import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../../globalComponents/Footer';
import Header from '../../globalComponents/Header';

function Profile({ match }) {
  return (
    <>
      <Header title="Perfil" match={ match } />
      <div>
        Profile
      </div>
      <Footer />
    </>
  );
}

Profile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Profile;
