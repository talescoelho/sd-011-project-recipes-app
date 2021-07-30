import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import RecipeAppContext from '../provider/RecipeAppProvider';

function Perfil() {
  // const [setLogin] = useContext(RecipeAppContext);

  return (
    <div>
      <h1>My Perfil Page</h1>
      <Header title="Perfil" />
      <p data-testid="profile-email">Email</p>
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
        >
          Sair
        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default Perfil;
