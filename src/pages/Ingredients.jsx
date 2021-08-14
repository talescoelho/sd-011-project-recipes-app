import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Cocktails, Foods } from '../services';

export default function Ingredients({ type }) {
  const name = 'Explorar Ingredientes';
  const [ingredients, setIngredients] = useState([]);
  const dispatch = useDispatch();
  const twelve = 12;
  const history = useHistory();

  useEffect(() => {
    const asyncFunc = async () => {
      if (type.includes('omida')) setIngredients(await Foods.ingredients);
      if (type.includes('ebidas')) setIngredients(await Cocktails.ingredients);
    };
    asyncFunc();
  }, [type]);

  function handleOnClick(ingredient) {
    dispatch({ type: 'SET_INGREDIENT', ingredient });
    history.push(`/${type}`);
  }

  function mapFunction(element, index) {
    const ingredient = type
      .includes('omida') ? element.strIngredient : element.strIngredient1;
    return (
      <button
        data-testid={ `${index}-ingredient-card` }
        type="button"
        onClick={ () => handleOnClick(ingredient) }
      >
        <h3 data-testid={ `${index}-card-name` }>{ingredient}</h3>
        <img
          data-testid={ `${index}-card-img` }
          alt="ingrediente"
          src={ type
            .includes('omida') ? (
              `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`) : (
              `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`) }
        />
      </button>

    );
  }

  return (
    <div>
      <Header pageName={ name } />
      <div>
        { ingredients.slice(0, twelve).map(mapFunction) }
      </div>
      <Footer />
    </div>
  );
}

Ingredients.propTypes = {
  type: PropTypes.shape({
    includes: PropTypes.func,
  }).isRequired,
};
