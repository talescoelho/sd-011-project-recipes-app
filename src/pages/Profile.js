import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import LSContext from '../context/LSContext';

const Profile = () => {
  const { LSValues: { user: { email } } } = useContext(LSContext);
  const { LSFunctions: {
    setEmail,
    setDoneRecipes,
    setFavoriteRecipes,
    setInProgressRecipes } } = useContext(LSContext);

  const userEmail = typeof (email) === 'string' ? email : '';

  function resetContext() {
    localStorage.clear();
    setEmail('');
    setDoneRecipes([]);
    setFavoriteRecipes([]);
    setInProgressRecipes({ cocktails: {}, meals: {} });
  }

  return (
    <>
      <Header title="Perfil" />
      <section>
        <h3 data-testid="profile-email">{ userEmail }</h3>
        <Link to="/receitas-feitas" data-testid="profile-done-btn">
          Receitas Feitas
        </Link>
        <br />
        <Link to="/receitas-favoritas" data-testid="profile-favorite-btn">
          Receitas Favoritas
        </Link>
        <br />
        <Link to="/">
          <button
            data-testid="profile-logout-btn"
            type="button"
            onClick={ () => resetContext() }
          >
            Sair
          </button>
        </Link>
      </section>
      <FooterMenu />
    </>
  );
};

export default Profile;
