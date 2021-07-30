import React, { useState, useEffect } from 'react';
import ButtonFoodsCategories from '../components/ButtonFoodsCategories';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Foods() {
  const [data, setData] = useState([]);

  async function fetchFoods() {
    const endpoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(endpoint);
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {
    fetchFoods();
  }, []);

  const maxArray = 12;

  return (
    <main>
      <Header title="Comidas" />
      <ButtonFoodsCategories />
      {data.length === 0 ? <p>Loading</p>
        : data.meals.slice(0, maxArray).map((food, index) => (
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
