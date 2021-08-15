import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../Explore-Profile.css';

class Profile extends Component {
  render() {
    const getEmail = JSON.parse(localStorage.getItem('user'));
    let userEmail = '';
    if (getEmail) {
      userEmail = getEmail.email;
    }
    return (
      <div>
        <Header title="Perfil" search={ false } />
        <div className="back-ground">
          <div className="div-profile">
            <p
              data-testid="profile-email"
              className="user-email"
            >
              { userEmail }
            </p>
            <Link to="/receitas-feitas">
              <Button
                variant="outline-secondary"
                data-testid="profile-done-btn"
                className="profile-buttons"
              >
                Receitas Feitas
              </Button>
            </Link>
            <Link to="/receitas-favoritas">
              <Button
                variant="outline-secondary"
                data-testid="profile-favorite-btn"
                className="profile-buttons"
              >
                Receitas Favoritas
              </Button>
            </Link>
            <Link to="/">
              <Button
                variant="outline-secondary"
                data-testid="profile-logout-btn"
                className="profile-buttons"
                onClick={ () => localStorage.clear() }
              >
                Sair
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Profile;
