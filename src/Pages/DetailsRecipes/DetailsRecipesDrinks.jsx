import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import MainContext from '../../Context/MainContext';
import IngredientsDrinks from '../../Components/IngredientsDrinks';

function DetailsRecipesFoods() {
  const location = useLocation();
  const { idDrinks, setIdDrinks, idDrinksAPI, setIdDrinksAPI,
    setDataRandomFoods, dataRandomFoods, newDataFoods,
    setNewDataFoods } = useContext(MainContext);

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

  useEffect(() => {
    const getAPIRandomly = async () => {
      const endpoint = 'https://www.themealdb.com/api/json/v1/1/random.php';
      const { meals } = await fetch(endpoint).then((data) => data.json());
      setDataRandomFoods(meals[0].strMeal);
    };
    getAPIRandomly();
  }, [setDataRandomFoods]);

  useEffect(() => {
    const getAPIByName = async () => {
      const endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${dataRandomFoods}`;
      const { meals } = await fetch(endpoint).then((data) => data.json());
      setNewDataFoods(meals);
    };
    getAPIByName();
  }, [dataRandomFoods, setNewDataFoods]);

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
      { newDataFoods.map((food, i) => (
        <li
          data-testid={ `${i}-recomendation-card` }
          key={ i }
        >
          { food.strMeal }
        </li>
      )) }
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
