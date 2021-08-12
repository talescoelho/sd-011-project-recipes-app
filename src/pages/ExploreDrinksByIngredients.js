import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import LowerMenu from '../components/LowerMenu';
import Header from '../components/Header';
import IngredientsCard from '../components/IngredientsCard';
import { fetchIngredientsFromCocktailsDB, fetchDrinksByIngredient } from '../services';
import GlobalContext from '../context';

export default function ExploreDrinksByIngredients({ history }) {
  const [ingredients, setIngredients] = useState([]);
  const { setDrinkArray, loading, setLoading } = useContext(GlobalContext);

  const getIngredients = async () => {
    setLoading(true);
    const ingredientsData = await fetchIngredientsFromCocktailsDB();
    setIngredients(ingredientsData);
    setLoading(false);
  };

  useEffect(() => {
    getIngredients();
  }, []);

  const filterByIngredient = async (ingredient) => {
    setLoading(true);
    const filteredDrinks = await fetchDrinksByIngredient(ingredient);
    console.log(filteredDrinks);
    setDrinkArray(filteredDrinks);
    setLoading(false);
  };

  const handleClick = (name) => {
    filterByIngredient(name);
    history.push('/bebidas/');
  };

  return (
    <div>
      <Header title="Explorar Ingredientes" renderButton />
      <div className="ingredients">
        {
          !loading && ingredients ? ingredients.map((ing, index) => {
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
