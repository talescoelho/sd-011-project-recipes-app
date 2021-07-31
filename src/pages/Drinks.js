import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Drinks() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  async function fetchDrinks() {
    const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(endpoint);
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {
    fetchDrinks();
  }, []);

  async function categoriesDrinks() {
    const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    const response = await fetch(endpoint);
    const json = await response.json();
    setCategories(json);
  }

  useEffect(() => {
    categoriesDrinks();
  }, []);

  async function searchByCategory(param) {
    const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${param}`;
    const response = await fetch(endpoint);
    const json = await response.json();
    setData(json);
  }

  const maxArrayDrinks = 12;
  const maxArrayCategories = 5;

  return (
    <main>
      <Header title="Bebidas" />
      {categories.length === 0 ? <p>Loading</p>
        : categories.drinks.slice(0, maxArrayCategories).map((categorie, index) => (
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
        : data.drinks.slice(0, maxArrayDrinks).map((drink, index) => (
          <div key={ index } data-testid={ `${index}-recipe-card` }>
            <img
              src={ drink.strDrinkThumb }
              alt="comida_principal"
              data-testid={ `${index}-card-img` }
              width="50px"
            />
            <p data-testid={ `${index}-card-name` }>{drink.strDrink}</p>
          </div>
        ))}
      <Footer />
    </main>
  );
}
