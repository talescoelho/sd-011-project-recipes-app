import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Foods, Cocktails, getIds } from '../services';
import Ingredients from '../components/Ingredients';
import Recommendations from '../components/Recommendations';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';
import '../styles/Details.css';

export default function Details() {
  const [recipe, setRecipe] = useState(null);
  const { pathname } = useLocation();
  const type = pathname;
  const { id } = useParams();

  useEffect(() => {
    async function asyncFunction() {
      let results = await Foods.getById(id);
      if (type.includes('bebida')) results = await Cocktails.getById(id);
      setRecipe(results[0]);
    }
    asyncFunction();
  }, [id, setRecipe, type]);
  if (recipe) {
    const {
      category, name, image, video, instructions, reverseType,
    } = getIds(type, recipe);
    return (
      <div>
        <img data-testid="recipe-photo" src={ image } alt={ name } />
        <h2 data-testid="recipe-title">{ name }</h2>
        <h3 data-testid="recipe-category">{ category }</h3>
        <ShareButton />
        <FavoriteButton recipe={ recipe } drinkOrFood={ type } />
        <Ingredients recipe={ recipe } />
        <div>
          <h3>Instructions</h3>
          <p data-testid="instructions">{ instructions }</p>
        </div>
        {
          (video) && (
            <iframe
              src={ video }
              title="Instruções em vídeo"
              data-testid="video"
            />
          )
        }
        <Recommendations type={ reverseType } />
        <button
          type="button"
          className="startButton"
          data-testid="start-recipe-btn"
        >
          Iniciar Receita
        </button>
      </div>
    );
  }
  return <p>Loading ...</p>;
}
