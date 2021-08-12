import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import profileIcon from '../images/profileIcon.svg';

const Explore = () => (
  <>
    <header>
      <input
        type="image"
        data-testid="profile-top-btn"
        src={ profileIcon }
        alt="icone de perfil"
      />
      <h1 data-testid="page-title">Explorar</h1>
    </header>
    <Link to="/explorar/comidas">
      <Button
        type="submit"
        data-testid="explore-food"
        variant="light"
        size="lg"
      >
        Explorar Comidas
      </Button>
    </Link>
    <Link to="/explorar/bebidas">
      <Button
        type="submit"
        data-testid="explore-drinks"
        variant="light"
        size="lg"
      >
        Explorar Bebidas
      </Button>
    </Link>
    <FooterMenu />
  </>
);
export default Explore;
