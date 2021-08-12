import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../context/UserContext';
import FooterMenu from '../components/FooterMenu';
import { requestDrinkIngredients } from '../services/requestIngredients';
import profileIcon from '../images/profileIcon.svg';

export default function ExploreFoodIngredient({ history }) {
  const [ingredients, setFetchIngredients] = useState([]);
  const { setDrinks } = useContext(UserContext);
  useEffect(() => {
    const callAPIingredients = async () => {
      const callAPI = await requestDrinkIngredients();
      const result = callAPI.drinks;
      setFetchIngredients(result);
    };
    callAPIingredients();
  }, []);
  const doze = 12;
  function getRecipeByIngredient(drinks) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drinks.strIngredient1}`)
      .then((response) => response.json())
      .then((data) => setDrinks(data.drinks))
      .then(history.push('/bebidas'));
  }
  if (!ingredients) return <div>is loading...</div>;
  return (
    <>
      <header>
        <input
          type="image"
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="icone de perfil"
        />
        <h1 data-testid="page-title">Explorar Ingredientes</h1>
      </header>
      <section className="drinks">
        {ingredients.map((drinks, index) => (index < doze ? (
          <button
            type="button"
            className="drinks"
            key={ drinks.idIngredient }
            data-testid={ `${index}-ingredient-card` }
            onClick={ () => getRecipeByIngredient(drinks) }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.thecocktaildb.com/images/ingredients/${drinks.strIngredient1}-Small.png` }
              alt={ `imagem do ${drinks.strIngredient1}` }
            />
            <p data-testid={ `${index}-card-name` }>{drinks.strIngredient1}</p>
          </button>
        ) : undefined))}
      </section>
      <FooterMenu />
    </>
  );
}

ExploreFoodIngredient.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};
