import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchAPI } from '../services';

export default function SearchIngredients({ type }) {
  const [ingredients, setIngredients] = useState([]);
  const dispatch = useDispatch();
  const twelve = 12;
  const history = useHistory();
  const path = type === 'food' ? 'comidas' : 'bebidas';

  useEffect(() => {
    const asyncFunc = async () => {
      setIngredients(await fetchAPI[type].ingredients);
    };
    asyncFunc();
  }, [type]);

  function searchIngredient(ingredient) {
    dispatch(
      { type: 'SET_SEARCH', search: { type: 'searchIngredient', key: ingredient } },
    );
    history.push(`/${path}`);
  }

  function mapFunction(element, index) {
    const ingredient = type === 'food' ? element.strIngredient : element.strIngredient1;
    return (
      <button
        data-testid={ `${index}-ingredient-card` }
        type="button"
        onClick={ () => searchIngredient(ingredient) }
      >
        <h3 data-testid={ `${index}-card-name` }>{ingredient}</h3>
        <img
          data-testid={ `${index}-card-img` }
          alt="ingrediente"
          src={ type === 'food' ? (
            `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`) : (
            `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`) }
        />
      </button>
    );
  }

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      <div>
        { ingredients.slice(0, twelve).map(mapFunction) }
      </div>
      <Footer />
    </div>
  );
}

SearchIngredients.propTypes = {
  type: PropTypes.shape({
    includes: PropTypes.func,
  }).isRequired,
};
