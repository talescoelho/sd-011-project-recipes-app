import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';

export default function Food() {
  const pageTitle = {
    pageName: 'Comidas',
    setIcon: true,
  };
  const history = useHistory();
  const { recipesDb, redirect } = useContext(RecipesContext);
  const getMealId = recipesDb.map((meal) => meal.idMeal);
  return (
    <div>
      <Header value={ pageTitle } />
      { redirect ? history.push(`/comidas/${getMealId}`) : (
        <div>
          foods
        </div>
      ) }
    </div>
  );
}
