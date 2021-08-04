import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import LowerMenu from '../components/LowerMenu';
import Header from '../components/Header';
import IngredientsCard from '../components/IngredientsCard';
import { fetchIngredientsFromCocktailsDB, fetchDrinksByIngredient } from '../services';
import GlobalContext from '../context';

export default function ExploreDrinksByIngredients({ history }) {
  const [ingredients, setIngredients] = useState([]);
  const { setDrinkArray } = useContext(GlobalContext);

  const getIngredients = async () => {
    const ingredientsData = await fetchIngredientsFromCocktailsDB();
    setIngredients(ingredientsData);
  };

  useEffect(() => {
    getIngredients();
  }, []);

  const filterByIngredient = async (ingredient) => {
    const filteredDrinks = await fetchDrinksByIngredient(ingredient);
    setDrinkArray(filteredDrinks);
  };

  const handleClick = (name) => {
    filterByIngredient(name);
    history.push('/bebidas/');
  };

  if (!ingredients.length) return <h2>Loading...</h2>;

  return (
    <div>
      <Header title="Explorar Ingredientes" renderButton />
      <div className="ingredients">
        {
          ingredients.length ? ingredients.map((ing, index) => {
            const ingredientsObject = { name: ing.strIngredient1, index };
            return (
              <IngredientsCard
                handleClick={ handleClick }
                key={ index }
                ingredient={ ingredientsObject }
              />
            );
          })
            : <span className="loading" />
        }
      </div>
      <LowerMenu />
    </div>
  );
}

ExploreDrinksByIngredients.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
