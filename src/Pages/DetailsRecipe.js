import React, { useEffect, useState } from 'react';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import ShareButton from '../Components/ShareButton';
import './Styles/detailsrecipe.css';

function DetailsRecipe() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const endPoint = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772';
      const { meals } = await fetch(endPoint).then((data) => data.json());
      setRecipes(meals);
      // console.log(meals);
    };
    getApi();
  }, []);
  console.log(recipes[0]);

  return (
    <div>
      <img id="img-recipe" src="" data-testid="recipe-photo" alt="" />
      <h2 data-testid="recipe-title">oi</h2>
      <ShareButton />
      <img src={ whiteHeartIcon } alt="Favoritar Coração" data-testid="favorite-btn" />
      <h3 data-testid="recipe-category">Category</h3>
      <h3>Ingredients</h3>
      {/* <ul><li data-testid={ `${index}-ingredient-name-and-measure` }>Item</li></ul> */}
      <h3 data-testid="instructions">Instructions</h3>
      <h3 data-testid="video">Video</h3>
      {/* <h3 data-testid={ `${index}-recomendation-card"` }>Recomendadas</h3> */}
      <div id="recommended"><h4>oi</h4></div>
      <button id="start-recipe-btn" type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
    </div>
  );
}

export default DetailsRecipe;
