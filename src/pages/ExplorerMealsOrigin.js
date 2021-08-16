import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import RecipesContext from '../context/RecipesContext';
import Loading from '../components/Loading';

function ExplorerMealsOrigin() {
  const [optionsArea, setOptions] = useState([]);
  const [area, setArea] = useState('Canadian');
  const { mealsData, setMealsData, resetFilter } = useContext(RecipesContext);

  useEffect(() => {
    const fetchMealsByArea = () => {
      const endpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
      return fetch(endpoint)
        .then((response) => response.json())
        .then((data) => {
          const dataMeals = data.meals;
          const limitOptions = 26;
          setOptions(dataMeals.slice(0, limitOptions));
        });
    };
    fetchMealsByArea();
  }, []);

  useEffect(() => {
    const filterMealsByArea = (origem) => {
      const endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${origem}`;
      return fetch(endpoint)
        .then((response) => response.json())
        .then((data) => {
          const dataMeals = data.meals;
          const limitRender = 12;
          const meals = dataMeals.slice(dataMeals, limitRender);
          setMealsData(meals);
        });
    };
    const handlerFilterOption = () => (
      area === 'All' ? resetFilter() : filterMealsByArea(area));
    handlerFilterOption();
  }, [area]);

  if (optionsArea.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <Header title="Explorar Origem" recipeType="drinks" searchButton />

      <div className="d-flex justify-content-center">
        <select
          className="select-countries"
          data-testid="explore-by-area-dropdown"
          onChange={ ({ target }) => setArea(target.value) }
        >
          <option data-testid="All-option" value="All">All</option>
          {optionsArea.map(({ strArea }, index) => (
            <option key={ index } data-testid={ `${strArea}-option` } value={ strArea }>
              {strArea}
            </option>
          ))}
        </select>
      </div>
      <div className="container my-5">
        <div className="row px-5 gallery-work">
          { mealsData !== [] && mealsData.map((recipe, index) => (
            <div className="col-md-4 my-3" key={ recipe.idDrink }>
              <Link to={ `/comidas/${recipe.idMeal}` }>
                <RecipeCard recipe={ recipe } index={ index } />
              </Link>
            </div>
          )) }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ExplorerMealsOrigin;
