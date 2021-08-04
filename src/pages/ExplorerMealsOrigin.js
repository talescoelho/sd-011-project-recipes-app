import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import RecipesContext from '../context/RecipesContext';

function ExplorerMealsOrigin() {
  const [optionsArea, setOptions] = useState([]);
  const [area, setArea] = useState('Canadian');
  const { mealsData, setMealsData } = useContext(RecipesContext);

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
    filterMealsByArea(area);
  }, [area]);

  return (
    <div>
      <Header title="Explorar Origem" recipeType="drinks" searchButton />
      <select
        data-testid="explore-by-area-dropdown"
        onChange={ ({ target }) => setArea(target.value) }
      >
        {optionsArea.map(({ strArea }, index) => (
          <option key={ index } data-testid={ `${strArea}-option` } value={ strArea }>
            {strArea}
          </option>))}
      </select>
      { mealsData !== [] && mealsData.map((recipe, index) => (
        <Link
          to={ `/comidas/${recipe.idMeal}` }
          key={ recipe.idMeal }
        >
          <RecipeCard
            recipe={ recipe }
            index={ index }
          />
        </Link>
      )) }
      <Footer />
    </div>
  );
}

export default ExplorerMealsOrigin;
