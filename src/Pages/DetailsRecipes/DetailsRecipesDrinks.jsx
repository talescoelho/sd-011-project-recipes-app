import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import MainContext from '../../Context/MainContext';
import IngredientsDrinks from '../../Components/IngredientsDrinks';
import { getFoodsInitial } from '../../Services/ApiFood';
import './scroll.css';

function DetailsRecipesFoods() {
  const location = useLocation();
  const { idDrinks, setIdDrinks, idDrinksAPI, setIdDrinksAPI, newDataFoods,
    setNewDataFoods } = useContext(MainContext);

  async function fetchFoodsInitial() {
    const foodsInitialAPI = await getFoodsInitial();
    setNewDataFoods(foodsInitialAPI.meals);
  }

  useEffect(() => {
    fetchFoodsInitial();
  }, []);
  console.log(newDataFoods);

  useEffect(() => {
    const URL = location.pathname;
    const id = URL.replace('/bebidas/', '');
    setIdDrinks(id);
  }, [location, setIdDrinks]);

  useEffect(() => {
    const getAPIById = async () => {
      const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrinks}`;
      const { drinks } = await fetch(endpoint).then((data) => data.json());
      setIdDrinksAPI(drinks[0]);
    };
    getAPIById();
  }, [idDrinks, setIdDrinksAPI]);

  // ! Limita a quantidade de recomendação
  const magicNumber = 6;

  return (
    <div>
      <img
        width="320"
        src={ idDrinksAPI.strDrinkThumb }
        alt={ `Comida selecionada: ${idDrinksAPI.strDrink}` }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">
        {idDrinksAPI.strDrink}
      </h1>
      <h2 data-testid="recipe-category">
        {idDrinksAPI.strAlcoholic}
      </h2>
      <button
        type="button"
        data-testid="share-btn"
      >
        compartilhar
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        favoritar
      </button>
      <p>
        {idDrinksAPI.strCategory}
      </p>
      <IngredientsDrinks />
      {/* //!===========================Implementar=============================== */}
      <ul className="scrollmenu">
        { newDataFoods.map((food, i) => i < magicNumber && (
          <li
            data-testid={ `${i}-recomendation-card` }
            key={ i }
          >
            <p data-testid={ `${i}-recomendation-title` }>
              { food.strMeal }
            </p>
          </li>
        )) }
      </ul>
      {/* //!=======================Recomendation Cards============================ */}
      <button
        type="button"
        data-testid="start-recipe-btn"
      >
        Iniciar receita
      </button>
    </div>
  );
}

export default DetailsRecipesFoods;
