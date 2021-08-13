import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import LowerMenu from '../components/LowerMenu';
import Header from '../components/Header';
import IngredientsCard from '../components/IngredientsCard';
import { fetchIngredientsFromMealsDB, fetchMealsByIngredient } from '../services';
import GlobalContext from '../context';
import '../styles/IngredientsCard.css';

export default function ExploreMealsByIngredients({ history }) {
  const [ingredients, setIngredients] = useState([]);
  const { setFoodArray, loading, setLoading } = useContext(GlobalContext);

  const getIngredients = async () => {
    setLoading(true);
    const ingredientsData = await fetchIngredientsFromMealsDB();
    setIngredients(ingredientsData);
    setLoading(false);
  };

  useEffect(() => {
    getIngredients();
  }, []);

  const filterByIngredient = async (ingredient) => {
    setLoading(true);
    const filteredMeals = await fetchMealsByIngredient(ingredient);
    setFoodArray(filteredMeals);
    setLoading(false);
  };

  const handleClick = (name) => {
    filterByIngredient(name);
    history.push('/comidas/');
  };

  return (
    <>
      <Header title="Explorar Ingredientes" renderButton />
      <div className="ingredients">
        {
          !loading && ingredients ? ingredients.map((ing, index) => {
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
    </>
  );
}

ExploreMealsByIngredients.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
