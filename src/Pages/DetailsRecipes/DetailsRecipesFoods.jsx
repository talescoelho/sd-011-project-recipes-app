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

  // // &===========================================================================
  // // async function getAPIById() {
  // //   if (idFoods) {
  // //     const foodByIngredientsAPI = await getDetailsFoodById(idFoods);
  // //     setIdFoodsAPI(foodByIngredientsAPI);
  // //   }
  // // }

  // useEffect(() => {
  //   const getAPIById = async () => {
  //     console.log(idFoods);
  //     const foodByIngredientsAPI = await getDetailsFoodById(idFoods);
  //     setIdFoodsAPI(foodByIngredientsAPI);
  //   };
  //   getAPIById();
  // }, [idFoods]);
  // // &===========================================================================
  // useEffect(() => console.log(idFoodsAPI), [idFoodsAPI]);

  // !===========================================================================
  useEffect(() => {
    const getAPIById = async () => {
      const endpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idFoods}`;
      // const endpoint = 'www.themealdb.com/api/json/v1/1/lookup.php?i=52772';
      const { meals } = await fetch(endpoint).then((data) => data.json());
      // const results = await fetch(endpoint).then((data) => data.json());
      console.log(meals[0]);
      setIdFoodsAPI(meals[0]);
      // console.log(idFoodsAPI);
    };
    getAPIById();
  }, [idFoods]);
  // !===========================================================================
  // const URL_VIDEO = idFoodsAPI.strYoutube;
  console.log(idFoodsAPI);
  console.log(idFoodsAPI.strYoutube);
  // const newURL = URL_VIDEO.replace('watch?v=', 'embed/');

  // console.log(idFoods);
  // ? retorno da API ==> idFoodsAPI
  console.log(idFoodsAPI);
  return (
    <div>
      <img
        width="320"
        src={ idFoodsAPI.strMealThumb }
        alt={ `Comida selecionada: ${idFoodsAPI.strMeal}` }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">
        {idFoodsAPI.strMeal}
      </h1>
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
        {idFoodsAPI.strCategory}
      </p>
      <p data-testid="instructions">
        {idFoodsAPI.strInstructions}
      </p>
      {idFoodsAPI.strYoutube}
      {/* <iframe
        width="560"
        src={ idFoodsAPI.strYoutube }
        title="YouTube video player"
        frameBorder="0"
        allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      /> */}
      {/* {idFoodsAPI
      && (<iframe
        width="420"
        height="345"
        src={ newURL }
        title="youtube video"
      />)} */}
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
