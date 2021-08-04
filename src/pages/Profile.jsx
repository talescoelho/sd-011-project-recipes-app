import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  const history = useHistory();
  const [userstate, setUserState] = useState({
    email: '',
  });

  useEffect(() => {
    const { email } = JSON.parse(localStorage.getItem('user')) || '';
    setUserState({ email });
  }, []);

  function exitUser() {
    history.push('/');
    localStorage.clear();
  }

  const { email } = userstate;
  return (
    <div>
      <Header title="Perfil" />
      <span data-testid="profile-email">{ email }</span>
      <button
        data-testid="profile-favorite-btn"
        type="button"
        onClick={ () => history.push('/receitas-favoritas') }
      >
        Receitas Favoritas
      </button>
      <button
        data-testid="profile-done-btn"
        type="button"
        onClick={ () => history.push('/receitas-feitas') }
      >
        Receitas Feitas
      </button>
      <button
        data-testid="profile-logout-btn"
        type="button"
        onClick={ exitUser }
      >
        Sair
      </button>
      <Footer />
    </div>
  );
}

export default Profile;
