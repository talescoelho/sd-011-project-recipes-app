import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import MainContext from '../../Context/MainContext';
import { getDetailsFoodById } from '../../Services/ApiFood';

function DetailsRecipesFoods() {
  const location = useLocation();
  const { idFoods, setIdFoods, idFoodsAPI, setIdFoodsAPI } = useContext(MainContext);

  useEffect(() => {
    const URL = location.pathname;
    const id = URL.replace('/comidas/', '');
    setIdFoods(id);
    // console.log(id);
  }, [location, setIdFoods]);

  // &===========================================================================
  // async function getAPIById() {
  //   if (idFoods) {
  //     const foodByIngredientsAPI = await getDetailsFoodById(idFoods);
  //     setIdFoodsAPI(foodByIngredientsAPI);
  //   }
  // }

  useEffect(() => {
    const getAPIById = async () => {
      console.log(idFoods);
      const foodByIngredientsAPI = await getDetailsFoodById(idFoods);
      setIdFoodsAPI(foodByIngredientsAPI);
    };
    getAPIById();
  }, [idFoods]);
  // &===========================================================================
  useEffect(() => console.log(idFoodsAPI), [idFoodsAPI]);

  // !===========================================================================
  useEffect(() => {
    const getAPIById = async () => {
      const endpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idFoods}`;
      // const endpoint = 'www.themealdb.com/api/json/v1/1/lookup.php?i=52772';
      const { results } = await fetch(endpoint).then((data) => data.json());
      // const results = await fetch(endpoint).then((data) => data.json());
      console.log(results);
      // setIdFoodsAPI(results);
      // console.log(idFoodsAPI);
    };

    getAPIById();
  }, [idFoods]);
  // !===========================================================================

  // console.log(idFoods);
  console.log(idFoodsAPI);
  return (
    <div>
      {/* <img
        width="320"
        src={ DetailsFoods.strMealThumb }
        alt={ `Comida selecionada: ${DetailsFoods.strMeal}` }
        data-testid="recipe-photo"
      />
      <p data-testid="recipe-title">
        {DetailsFoods.strMeal}
      </p>
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
      <p data-testid="recipe-category">
        {DetailsFoods.strCategory}
      </p> */}
      oi
      {idFoods}
    </div>
  );
}

export default DetailsRecipesFoods;
