import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout } from '../components';
import { useTheme } from '../hooks';

function Perfil() {
  const { colors } = useTheme();

  const styles = {
    main: {
      backgroundColor: colors.background,
      color: colors.text400,
    },
  };
  const emailUser = localStorage.getItem('user');
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <Layout title="Perfil">
      <main style={ styles.main }>
        <h2 data-testid="page-title">Perfil</h2>
        <span data-testid="profile-email">{ `Email${emailUser} `}</span>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/receitas-feitas') }
        >
          Receitas Feitas
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/receitas-favoritas') }
        >
          Receitas Favoritas
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ logout }
        >
          Sair
        </button>
      </main>
    </Layout>
  );
}

export default Perfil;
