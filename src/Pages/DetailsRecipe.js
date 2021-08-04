import React, { useEffect, useState } from 'react';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import ShareButton from '../Components/ShareButton';

function DetailsRecipe() {
  const [recipes, setRecipes] = useState({});

  useEffect(() => {
    const getApi = async () => {
      const endPoint = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772';
      const { meals } = await fetch(endPoint).then((data) => data.json());
      setRecipes(meals);
    };
    getApi();
  }, []);

  return (
    <div>
      <img src="" data-testid="recipe-photo" alt="" />
      <h2>{console.log(recipes[0])}</h2>
      <ShareButton />
      <img src={ whiteHeartIcon } alt="Favoritar Coração" />
      <h3>Ingredients</h3>
      <ul><li>Item</li></ul>
      <h3>Instructions</h3>
      <h3>Video</h3>
      <h3>Recomendadas</h3>
      <button type="button">Iniciar Receita</button>
    </div>
  );
}

export default DetailsRecipe;
