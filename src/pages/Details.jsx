import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Foods, Cocktails, getIds } from '../services';
import Ingredients from '../components/Ingredients';
import Recommendations from '../components/Recommendations';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';
import '../styles/Details.css';
import RecipeButton from '../components/RecipeButton';
import DetailsProvider from '../context/detailsProvider';

export default function Details() {
  const [recipe, setRecipe] = useState(null);
  const [state, setState] = useState(null);
  const { pathname } = useLocation();
  const type = pathname;
  const { id, inProgress } = useParams();

  useEffect(() => {
    async function asyncFunction() {
      let results = await Foods.getById(id);
      if (type.includes('bebida')) results = await Cocktails.getById(id);
      setRecipe(results[0]);
    }
    asyncFunction();
  }, [id, setRecipe, type]);

  useEffect(() => setState(inProgress), [inProgress]);

  useEffect(() => {
    // Verificações de se a receita já foi iniciada
    const initialInProgress = JSON.stringify({ cocktails: {}, meals: {} });
    if (!localStorage.inProgressRecipes) {
      localStorage.setItem('inProgressRecipes', initialInProgress);
    }
    const inProgressRecipes = JSON.parse(localStorage.inProgressRecipes);
    const key = (type.includes('bebida')) ? 'cocktails' : 'meals';
    const inProgressCheck = (Object.keys(inProgressRecipes[key]).some((e) => e === id));
    if (inProgressCheck) setState('inProgress');

    // Verificações de se a receita já foi concluída
    if (!localStorage.doneRecipes) {
      localStorage.setItem('doneRecipes', '[]');
    }
    const doneRecipes = JSON.parse(localStorage.doneRecipes);
    const doneCheck = doneRecipes.some((e) => e.id === id);
    if (doneCheck) setState('finish');
  }, [id, type]);

  if (recipe) {
    const recipeIds = getIds(type, recipe);
    const {
      category, name, image, video, instructions, reverseType, type: drinkOrFood,
    } = recipeIds;
    return (
      <DetailsProvider>
        <div>
          <img data-testid="recipe-photo" src={ image } alt={ name } />
          <h2 data-testid="recipe-title">{ name }</h2>
          <h3 data-testid="recipe-category">{ category }</h3>
          <ShareButton type={ drinkOrFood } id={ id } />
          <FavoriteButton
            recipe={ recipeIds }
            dataTestid="favorite-btn"
          />
          <Ingredients recipe={ recipe } inProgress={ inProgress } type={ drinkOrFood } />
          <div>
            <h3>Instructions</h3>
            <p data-testid="instructions">{ instructions }</p>
          </div>
          {
            (video) && <iframe src={ video } title="Instruções" data-testid="video" />
          }
          <Recommendations type={ reverseType } />
          <RecipeButton state={ state } />
        </div>
      </DetailsProvider>
    );
  }
  return <p>Loading ...</p>;
}
