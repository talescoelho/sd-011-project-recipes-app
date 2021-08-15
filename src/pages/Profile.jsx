import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Button } from '../styles';

export default function Profile() {
  const history = useHistory();
  if (!localStorage.user) {
    localStorage.setItem('user', JSON.stringify({ email: '' }));
  }
  const { email } = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <Header title="Perfil" />
      <div className="d-flex flex-column align-items-center p-2">
        <h2 data-testid="profile-email">
          {' '}
          { email }
          {' '}
        </h2>
        <div className="d-flex flex-column p-2">
          <Button
            className="btn m-3 border btn-lg border-dark"
            type="button"
            data-testid="profile-done-btn"
            onClick={ () => history.push('/receitas-feitas') }
          >
            Receitas Feitas
          </Button>
          <Button
            className="btn m-3 border btn-lg border-dark"
            type="button"
            data-testid="profile-favorite-btn"
            onClick={ () => history.push('/receitas-favoritas') }
          >
            Receitas Favoritas
          </Button>
          <Button
            type="button"
            className="btn m-3 border btn-lg border-dark"
            data-testid="profile-logout-btn"
            onClick={ () => {
              localStorage.clear();
              history.push('/');
            } }
          >
            Sair
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
