import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './Profile.css';
import Button from 'react-bootstrap/Button';
import perfilbg from './perfilbg.mp4';



function Profile() {
  /* const [userEmailProfile, setUserEmailProfile] = useState('');
   const { userEmail } = useContext(UserContext);

   useEffect(() => {
     const userEmailStorageString = JSON.parse(localStorage.getItem('user'));
     if (userEmailStorageString === null) setUserEmailProfile(userEmail);
     else setUserEmailProfile(userEmailStorageString.email);
     setHideSearchBtn(false);
     setPageName('Perfil');
    }, []);

  const clearStorage = () => localStorage.clear();
    */
  return (
    <div>
      <video
        width="360"
        height="640"
        playsinline
        autoPlay
        muted
        loop
        className="bgVideo"
      >
        <source src={ perfilbg } type="video/mp4" />
      </video>
      <Header title="Perfil" />
      <div className="perfilpage">
        <main className="main-profile">
          <section className="profile-section">
            <p data-testid="profile-email">userEmailProfile</p>
            <Link className="button-one" to="/receitas-feitas">
              <Button
                type="button"
                data-testid="profile-done-btn"
                className="button-one"
                variant="outline-success"
              >
                Receitas Feitas
              </Button>
            </Link>
            <Link className="button-two" to="/receitas-favoritas">
              <Button
                type="button"
                data-testid="profile-favorite-btn"
                className="button-two"
                variant="outline-dark"
              >
                Receitas Favoritas
              </Button>
            </Link>
            <Link className="button-three" to="/">
              <Button
                type="button"
                data-testid="profile-logout-btn"
                className="button-three"
                variant="outline-danger"
              >
                Sair
              </Button>
            </Link>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
