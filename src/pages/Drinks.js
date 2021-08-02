import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';

export default function Drinks() {
  const pageTitle = {
    pageName: 'Bebidas',
    setIcon: true,
  };
  const history = useHistory();
  const { recipesDb, redirect } = useContext(RecipesContext);
  const getDrinksId = recipesDb.map((drink) => drink.idDrink);
  return (
    <div>
      <Header value={ pageTitle } />
      { redirect ? history.push(`/bebidas/${getDrinksId}`) : (
        <div>
          foods
        </div>
      ) }
    </div>
  );
}
