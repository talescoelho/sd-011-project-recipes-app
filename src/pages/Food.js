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
  const limits = 12;
  return (
    <div>
      <Header value={ pageTitle } />
      { redirect ? history.push(`/comidas/${recipesDb.map((meal) => meal.idMeal)}`) : (
        <div>
          {
            recipesDb.map((meal, index) => (
              (index < limits) && (
                <div key={ index }>
                  <div data-testid={ `${index}-recipe-card` }>
                    <img
                      src={ meal.strMealThumb }
                      data-testid={ `${index}-card-img` }
                      alt={ meal.strMeal }
                    />
                  </div>
                  <div>
                    <span data-testid={ `${index}-card-name` }>{ meal.strMeal }</span>
                  </div>
                </div>
              )
            ))
          }
        </div>
      ) }
    </div>
  );
}
