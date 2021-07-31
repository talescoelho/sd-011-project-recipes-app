import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Foods() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  async function fetchFoods() {
    const endpoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(endpoint);
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {
    fetchFoods();
  }, []);

  async function categoriesFood() {
    const endpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
    const response = await fetch(endpoint);
    const json = await response.json();
    setCategories(json);
  }

  useEffect(() => {
    categoriesFood();
  }, []);

  async function searchByCategory(param) {
    const endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${param}`;
    const response = await fetch(endpoint);
    const json = await response.json();
    setData(json);
  }

  const maxArrayFoods = 12;
  const maxArrayCategories = 5;

  return (
    <main>
      <Header title="Comidas" />
      {categories.length === 0 ? <p>Loading</p>
        : categories.meals.slice(0, maxArrayCategories).map((categorie, index) => (
          <div key={ index } data-testid={ `${index}-recipe-card` }>
            <button
              type="button"
              data-testid={ `${categorie.strCategory}-category-filter` }
              onClick={ () => searchByCategory(categorie.strCategory) }
            >
              {categorie.strCategory}
            </button>
          </div>
        ))}
      {data.length === 0 ? <p>Loading</p>
        : data.meals.slice(0, maxArrayFoods).map((food, index) => (
          <div key={ index } data-testid={ `${index}-recipe-card` }>
            <img
              src={ food.strMealThumb }
              alt="comida_principal"
              data-testid={ `${index}-card-img` }
              width="50px"
            />
            <p data-testid={ `${index}-card-name` }>{food.strMeal}</p>
          </div>
        ))}
      <Footer />
    </main>
  );
}

export default Foods;
