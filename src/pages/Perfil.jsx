import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Layout } from '../components';
import { useTheme, useUser, updateEmail } from '../hooks';

function Perfil() {
  const { colors } = useTheme();
  const { email } = useUser();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!email) {
      const storageUser = localStorage.getItem('user');
      const parsedUser = JSON.parse(storageUser);
      dispatch(updateEmail(parsedUser.email));
    }
  }, [dispatch, email]);

  const styles = {
    main: {
      backgroundColor: colors.background,
      color: colors.text400,
    },
  };
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <Layout title="Perfil">
      <main style={ styles.main }>
        <h2 data-testid="page-title">Perfil</h2>
        <span data-testid="profile-email">{ `Email${email} `}</span>
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
