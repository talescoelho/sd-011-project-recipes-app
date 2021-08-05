import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LSContext from './LSContext';

function LSProvider({ children }) {
  const [email, setEmail] = useState('');
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [cocktailsInProgress, setCocktailsInProgress] = useState({});
  const [mealsInProgress, setMealsInProgress] = useState({});

  useEffect(() => {
    const emailLS = JSON.parse(localStorage.getItem('user')).email;
    const doneRecipesLS = JSON.parse(localStorage.getItem('doneRecipes'));
    const favoriteRecipesLS = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const cocktailsInProgressLS = JSON.parse(localStorage.getItem('inProgressRecipes'))
      .cocktails;
    const mealsInProgressLS = JSON.parse(localStorage.getItem('inProgressRecipes'))
      .meals;
    setEmail(emailLS);
    setDoneRecipes(doneRecipesLS);
    setFavoriteRecipes(favoriteRecipesLS);
    setCocktailsInProgress(cocktailsInProgressLS);
    setMealsInProgress(mealsInProgressLS);
  }, []);

  const contextValue = {
    LSValues: {
      mealsToken: 1,
      cocktailsToken: 1,
      user: { email },
      doneRecipes,
      favoriteRecipes,
      inProgressRecipes: {
        cocktails: cocktailsInProgress,
        meals: mealsInProgress,
      },
    },
    LSFunctions: {
      setEmail,
      setDoneRecipes,
      setFavoriteRecipes,
      setCocktailsInProgress,
      setMealsInProgress,
    },
  };

  return (
    <LSContext.Provider value={ contextValue }>
      {children}
    </LSContext.Provider>
  );
}

LSProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default LSProvider;
