import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import { fetchDrinksName } from '../services/DrinksApiServices';

export default function Drinks() {
  const pageTitle = {
    pageName: 'Bebidas',
    setIcon: true,
  };

  const [firstDrink, setFirstDrink] = useState([]);
  const [categoriesDrink, setCategoriesDrink] = useState([]);

  useEffect(() => {
    const response = async () => {
      const data = await fetchDrinksName('');
      return setFirstDrink(data);
    };
    response();
  }, []);

  useEffect(() => {
    const response = async () => {
      const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const dataList = await data.json();
      return setCategoriesDrink(dataList.drinks);
    };
    response();
  }, []);

  const history = useHistory();
  const { recipesDb, redirect } = useContext(RecipesContext);
  const limits = 12;
  const limitCategory = 5;

  function handleDrinks() {
    if (recipesDb.length === 0) {
      return (
        <div>
          {
            firstDrink.map((drink, index) => (
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
          recipesDb.map((drink, index) => (
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
      <button type="button">All</button>
      { categoriesDrink.map((category, index) => ((index < limitCategory
      ) && (
        <button
          type="button"
          key={ index }
          data-testid={ `${category.strCategory}-category-filter` }
        >
          {category.strCategory}
        </button>)
      ))}
      { redirect
        ? history.push(`/bebidas/${recipesDb.map((drink) => drink.idDrink)}`)
        : handleDrinks() }
      <FooterMenu />
    </div>
  );
}
