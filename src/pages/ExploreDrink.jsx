import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { requestRandomDrinkRecipe } from '../services/requestRandomRecipe';
import profileIcon from '../images/profileIcon.svg';
import FooterMenu from '../components/FooterMenu';

export default function ExploreDrink({ history }) {
  const callRandomAPIdrink = async () => {
    const callAPI = await requestRandomDrinkRecipe();
    const result = callAPI.drinks;
    history.push(`/bebidas/${result[0].idDrink}`);
  };
  return (
    <>
      <header>
        <input
          type="image"
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="icone de perfil"
        />
        <h1 data-testid="page-title">Explorar Bebidas</h1>
      </header>
      <Link to="/explorar/bebidas/ingredientes">
        <Button
          type="submit"
          data-testid="explore-by-ingredient"
          variant="light"
          size="lg"
        >
          Por Ingredientes
        </Button>
      </Link>
      <Button
        type="submit"
        data-testid="explore-surprise"
        variant="light"
        size="lg"
        onClick={ () => callRandomAPIdrink() }
      >
        Me Surpreenda!
      </Button>
      <FooterMenu />
    </>
  );
}

ExploreDrink.propTypes = {
  history: PropTypes.node.isRequired,
};
