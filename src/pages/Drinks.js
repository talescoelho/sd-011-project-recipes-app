import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import { fetchDrinksLetter } from '../services/DrinksApiServices';

export default function Drinks() {
  const pageTitle = {
    pageName: 'Bebidas',
    setIcon: true,
  };

  const [firstDrink, setFirstDrink] = useState([]);

  useEffect(() => {
    const response = async () => {
      const data = await fetchDrinksLetter('a');
      return setFirstDrink(data);
    };
    response();
  }, []);

  const history = useHistory();
  const { recipesDb, redirect } = useContext(RecipesContext);
  const limits = 12;

  function handleDrinks() {
    if (recipesDb.length === 0) {
      return (
        <div>
          {
            firstDrink.map((drink, index) => (// requisito 17, card com limite de 12
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
      );
    }
    return (
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
    );
  }

  return (
    <div>
      <Header value={ pageTitle } />
      { redirect ? history.push(`/bebidas/${recipesDb.map((drink) => drink.idDrink)}`) : handleDrinks() }
      <FooterMenu />
    </div>
  );
}
