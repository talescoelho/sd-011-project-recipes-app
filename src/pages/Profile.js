import React, { useState, useEffect } from 'react';
import md5 from 'crypto-js/md5';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  const [email, setEmail] = useState('');
  const [imageProfile, setImageProfile] = useState('');

  const logout = () => {
    localStorage.clear();
  };

  const getUserProfile = async () => {
    const emailLocalStorage = JSON.parse(localStorage.getItem('user'));
    await setEmail(emailLocalStorage.email);
    const hash = md5(emailLocalStorage.email).toString();
    const url = `https://www.gravatar.com/avatar/${hash}`;
    await setImageProfile(url);
  };

  useEffect(() => {
    getUserProfile();
  }, []);
  return (
    <>
      <Header title="Perfil" />
      <div className="container profile">

        <div className="card border border-danger card-profile">
          <img
            src={ imageProfile }
            alt="User Profile"
            className="rounded-circle img-fluid img-profile"
          />
          <span
            className="text-center text-email"
            data-testid="profile-email"
          >
            {email}
          </span>
        </div>

        <div>
          <Link to="/receitas-feitas">
            <button
              className="category-bar-button"
              type="button"
              data-testid="profile-done-btn"
            >
              Receitas Feitas
            </button>
          </Link>
        </div>
        <div>
          <Link to="/receitas-favoritas">
            <button
              className="category-bar-button"
              type="button"
              data-testid="profile-favorite-btn"
            >
              Receitas Favoritas
            </button>
          </Link>
        </div>
        <div>
          <Link to="/">
            <button
              className="category-logout-button"
              type="button"
              data-testid="profile-logout-btn"
              onClick={ logout }
            >
              Sair
            </button>
          </Link>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Profile;
