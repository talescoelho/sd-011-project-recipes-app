import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import FooterMenu from '../components/FooterMenu';
import { requestDrinkIngredients } from '../services/requestIngredients';

export default function ExploreFoodIngredient({ history }) {
  const [ingredients, setFetchIngredients] = useState([]);
  useEffect(() => {
    const callAPIingredients = async () => {
      const callAPI = await requestDrinkIngredients();
      const result = callAPI.drinks;
      setFetchIngredients(result);
    };
    callAPIingredients();
  }, []);
  const doze = 12;
  const exploreIngredient = 'Explorar Ingredientes';
  function getRecipeByIngredient(drinks) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drinks.strIngredient1}`)
      .then((response) => response.json())
      // .then((data) => setStateusado para renderizar na página principal);
      .then(history.push('/bebidas'));
  }
  if (!ingredients) return <div>is loading...</div>;
  return (
    <>
      <Header title={ exploreIngredient } />
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
