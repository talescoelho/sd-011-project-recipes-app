import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderFood from '../components/HeaderFood';

function userProfile() {
  async function getStorage() {
    const storage = await JSON.parse(localStorage.getItem('user'));
    const user = storage.email;
    return user;
  }

  return (
    <div>
      <HeaderFood title="Perfil" search={ false } />
      <h4 data-testid="profile-email">{ () => getStorage() }</h4>
      <Link to="/receitas-feitas">
        <button
          type="button"
          data-testid="profile-done-btn"
        >
          Receitas Feitas
        </button>
      </Link>
      <Link to="/receitas-favoritas">
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Receitas Favoritas
        </button>
      </Link>
      <Link to="/">
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => {
            localStorage.clear();
          } }
        >
          Sair
        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default userProfile;
