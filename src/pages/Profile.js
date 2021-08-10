import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Profile extends Component {
  render() {
    const getEmail = JSON.parse(localStorage.getItem('user'));
    let userEmail = ''
    if(getEmail){
    userEmail = getEmail.email;
    }
    return (
      <div>
        <Header title="Perfil" search={ false } />
        <p data-testid="profile-email">{ userEmail }</p>
        <Link to="/receitas-feitas">
          <button type="button" data-testid="profile-done-btn">Receitas Feitas</button>
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
            onClick={ () => localStorage.clear() }
          >
            Sair
          </button>
        </Link>
        <Footer />
      </div>
    );
  }
}

export default Profile;
