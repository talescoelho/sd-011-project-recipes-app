import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/searchIcon.svg';

class Header extends Component {
  render() {
    return (
      <main>
        <Link to="/perfil">
          <button type="button">Perfil</button>
        </Link>
        <span>Título</span>
        <button type="button"><img src={ logo } alt="lupa" /></button>
      </main>
    );
  }
}

export default Header;
