import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import LowerMenu from '../components/LowerMenu';
import Header from '../components/Header';
import IngredientsCard from '../components/IngredientsCard';
import { fetchIngredientsFromMealsDB, fetchMealsByIngredient } from '../services';
import GlobalContext from '../context';

export default function ExploreMealsByIngredients({ history }) {
  const [ingredients, setIngredients] = useState([]);
  const { setFoodArray } = useContext(GlobalContext);

  const getIngredients = async () => {
    const ingredientsData = await fetchIngredientsFromMealsDB();
    setIngredients(ingredientsData);
  };

  useEffect(() => {
    getIngredients();
  }, []);

  const filterByIngredient = async (ingredient) => {
    const filteredMeals = await fetchMealsByIngredient(ingredient);
    setFoodArray(filteredMeals);
  };

  const handleClick = (name) => {
    filterByIngredient(name);
    history.push('/comidas/');
  };

  // if (!ingredients.length) return <h2>Loading...</h2>;

  return (
    <div>
      <Header title="Explorar Ingredientes" renderButton />
      <div className="ingredients">
        {
          ingredients.length ? ingredients.map((ing, index) => {
            const ingredientsObject = { name: ing.strIngredient, index, api: 'meals' };
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

ExploreMealsByIngredients.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
