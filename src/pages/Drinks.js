import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';

export default function Drinks() {
  const pageTitle = {
    pageName: 'Bebidas',
    setIcon: true,
  };
  const history = useHistory();
  const { recipesDb, redirect } = useContext(RecipesContext);
  const limits = 12;
  return (
    <div>
      <Header value={ pageTitle } />
      { redirect ? history.push(`/bebidas/${recipesDb.map((drink) => drink.idDrink)}`) : (
        <div>
          {
            recipesDb.map((drink, index) => (// requisito 17, card com limite de 12
              (index < limits) && (
                <div key={ index }>
                  <div data-testid={ `${index}-recipe-card` }>
                    <img
                      src={ drink.strDrinkThumb }
                      data-testid={ `${index}-card-img` }
                      alt={ drink.strDrink }
                    />
                  </div>
                  <div>
                    <span data-testid={ `${index}-card-name` }>{ drink.strDrink }</span>
                  </div>
                </div>
              )
            ))
          }
        </div>
      ) }
      <FooterMenu />
    </div>
  );
}
