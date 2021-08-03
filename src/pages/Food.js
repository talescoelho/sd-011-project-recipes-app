import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import { fetchMealsLetter } from '../services/MealApiService';

export default function Food() {
  const pageTitle = {
    pageName: 'Comidas',
    setIcon: true,
  };

  const [firstFood, setFirstFood] = useState([]);
  const [categoriesFood, setCategoriesFood] = useState([]);

  useEffect(() => {
    const response = async () => {
      const data = await fetchMealsLetter('c');
      return setFirstFood(data);
    };
    response();
  }, []);

  useEffect(() => {
    const response = async () => {
      const data = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const dataList = await data.json();
      return setCategoriesFood(dataList.meals);
    };
    response();
  }, []);

  const history = useHistory();
  const { recipesDb, redirect } = useContext(RecipesContext);
  const limits = 12;
  const limitCategory = 5;

  function handleMeals() {
    if (recipesDb.length === 0) {
      return (
        <div>
          {
            firstFood.map((meal, index) => (
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
      );
    }
    return (
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
    );
  }

  return (
    <div>
      <Header value={ pageTitle } />
      <button type="button">All</button>
      { categoriesFood.map((category, index) => ((index < limitCategory
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
        ? history.push(`/comidas/${recipesDb.map((meal) => meal.idMeal)}`)
        : handleMeals()}
      <FooterMenu />
    </div>
  );
}
