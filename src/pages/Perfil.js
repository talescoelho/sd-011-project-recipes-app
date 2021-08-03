import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import email from '../reducers/login';

class Perfil extends Component {
  constructor() {
    super();

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    localStorage.clear();
  }

  handleEmail() {
    localStorage.getItem('user', JSON);
  }

  render() {
    const title = 'Perfil';
    const lupa = 'desligada';
    return (
      <div>
        <h1 data-testid="page-title">Perfil</h1>
        <Header
          title={ title }
          lupa={ lupa }
        />
        <h2 data-testid="profile-email">{ this.handleEmail }</h2>
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
            onClick={ this.handleLogOut }
          >
            Sair
          </button>
        </Link>
        <Footer />
      </div>
    );
  }
}

export default Perfil;
